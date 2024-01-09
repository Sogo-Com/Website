import { fail, redirect } from '@sveltejs/kit'
import { IsJsonString, IsEmptyFile, IsString, IsStringNotEmpty, IsObject, IsPhoto, IsFile, GetExtension } from "$lib/utils/type";

import bcrypt from 'bcrypt'
import { db } from '$lib/database'
import {  writeFileSync,existsSync, mkdirSync } from 'fs';

const FULL_UPLOAD_PATH = `uploads/collaborateurs/`
const PARTIAL_UPLOAD_PATH = "/uploads/collaborateurs/"


export const load = async (serverloadEvent) => {

  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const { params } = serverloadEvent
  const { id = '' } = params
  let collaborateur = await db.collaborateur.findUnique({
    where: {
      id
    }
  })

  collaborateur = collaborateur == null ? {} : collaborateur

  return {
    collaborateur
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

    let { id, prenom = '',rang=1,descriptionCourte = '',  description = '',photoInactive = '', photoActive = '', photoInactiveFile ,photoActiveFile} = data

    if (prenom.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le prenom ne doit pas être vide",
      });
    }

    if (rang == null || isNaN(rang) ||  parseInt(rang) < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le rang doit être un nombre et supperieur à 0",
      });
    }

    rang = parseInt(rang)

    if (descriptionCourte.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ La description courte ne doit pas être vide",
      });
    }


    if (!IsPhoto(photoInactiveFile)&& !IsStringNotEmpty(photoInactive)) {
      return fail(400, {
        data: data,
        errorMsg: "❌ La photo inactive est requise",
      });

    }

    if (!IsPhoto(photoActiveFile)&& !IsStringNotEmpty(photoActive)) {
      return fail(400, {
        data: data,
        errorMsg: "❌ La photo active est requise",
      });

    }


    try {

      
      if (IsPhoto(photoInactiveFile)) {

        
        if (!existsSync(FULL_UPLOAD_PATH)){
          mkdirSync(FULL_UPLOAD_PATH);
        }


        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoInactiveFile.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoInactiveFile.name}`

        writeFileSync(fsPhotoPath, Buffer.from(await photoInactiveFile.arrayBuffer()))
        photoInactive = dbPhotoPath

      }

          
      if (IsPhoto(photoActiveFile)) {
        
        if (!existsSync(FULL_UPLOAD_PATH)){
          mkdirSync(FULL_UPLOAD_PATH);
        }
        
        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoActiveFile.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoActiveFile.name}`

        writeFileSync(fsPhotoPath, Buffer.from(await photoActiveFile.arrayBuffer()))
        photoActive = dbPhotoPath

      }

      const collaborateur = await db.collaborateur.upsert({
        where: {
          id
        },
        create: {
          prenom,
          rang,
          descriptionCourte,  
          description,
          photoInactive, 
          photoActive,
        },
        update: {
          prenom,
          rang,
          descriptionCourte,  
          description,
          photoInactive, 
          photoActive,
        },
      })

      return {
        data: collaborateur,
        errorMsg: undefined,
      };


    } catch (err) {

      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement du collaborateur",
      });

    }



  },


  delete: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { id = null } = data

    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data: data,
        errorMsg: "❌ L'identifiant du collaborateur est requis",
      });
    }

    try {

      const collaborateurToDelete = await db.collaborateur.findUnique({
        where: {
          id
        }
      })

      if (collaborateurToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "Le collaborateur n'existe pas",
        });
      }

      await db.collaborateur.delete({
        where: {
          id
        },
      })

      return {
        data: undefined,
        errorMsg: undefined,
      };

    } catch (err) {

      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de la suppression du collaborateur",
      });

    }
  },
};

