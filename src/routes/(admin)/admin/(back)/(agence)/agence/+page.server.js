import { fail, redirect } from '@sveltejs/kit'
import { IsJsonString, IsEmptyFile, IsString, IsStringNotEmpty, IsObject, IsPhoto, IsFile, GetExtension } from "$lib/utils/type";

import bcrypt from 'bcrypt'
import { db } from '$lib/database'
import {  writeFileSync,existsSync, mkdirSync } from 'fs';

const FULL_UPLOAD_PATH = `uploads/agence/`
const PARTIAL_UPLOAD_PATH = "/uploads/agence/"



export const load = async (serverloadEvent) => {

  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const { params } = serverloadEvent
  let pageAgence = await db.pageAgence.findUnique({
    where: {
      id:"1"
    }
  })

  if (pageAgence == null) {
    throw redirect(302, '/admin/pageAgences')
  }

  return {
    pageAgence
  }
}


export const actions = {
  create:  async ({ request, locals}) => {
    
   
    const data = Object.fromEntries(await request.formData());

    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN" ) {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    let {  photo, photoFile, citation, valeurDescription } = data


    if (citation.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ La citation ne doit pas être vide",
      });
    }

    if (valeurDescription.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le description de la valeur ne doit pas être vide",
      });
    }


    try {

      
        if (IsPhoto(photoFile)) {
  
          
          if (!existsSync(FULL_UPLOAD_PATH)){
            mkdirSync(FULL_UPLOAD_PATH);
          }
  
  
          const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoFile.name}`
          const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoFile.name}`
  
          writeFileSync(fsPhotoPath, Buffer.from(await photoFile.arrayBuffer()))
          photo = dbPhotoPath
  
        }
  
          
        const pageAgence = await db.pageAgence.update({
            where: {
              id : id.toString()
            },
            data: {
              date,
              titre,
              description,
            },
          })
    
  
        return {
          data: pageAgence,
          errorMsg: undefined,
        };
  
  
      } catch (err) {
  
        return fail(400, {
          data: data,
          errorMsg: "❌ Une erreur est survenue lors de l'enregistrement de la page agence",
        });
  
      }
  




  },

};

