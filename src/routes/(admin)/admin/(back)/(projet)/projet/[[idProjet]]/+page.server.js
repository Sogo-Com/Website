import { fail, redirect } from '@sveltejs/kit'
import { IsJsonString, IsEmptyFile, IsString, IsStringNotEmpty, IsObject, IsPhoto, IsFile, GetExtension } from "$lib/utils/type";

import bcrypt from 'bcrypt'
import { db } from '$lib/database'
import {  writeFileSync,existsSync, mkdirSync } from 'fs';

const FULL_UPLOAD_PATH = `uploads/projets/`
const PARTIAL_UPLOAD_PATH = "/uploads/projets/"


export const load = async (serverloadEvent) => {

  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const { params } = serverloadEvent
  const { idProjet = '' } = params
  let projet = await db.projet.findUnique({
    where: {
      id: idProjet
    }
  })

  projet = projet == null ? {} : projet

  return {
    projet
  }
}


export const actions = {
  create: async ({ request }) => {
    console.log("Hit action");
    const data = Object.fromEntries(await request.formData());

    let { id, titre,  descriptionCourte,photo, photoLogo, photoFile ,photoLogoFile ,contenu} = data

    if (titre.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le titre ne doit pas être vide",
      });
    }


    if (descriptionCourte.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ La description courte ne doit pas être vide",
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

          
      if (IsPhoto(photoLogoFile)) {
        
        if (!existsSync(FULL_UPLOAD_PATH)){
          mkdirSync(FULL_UPLOAD_PATH);
        }
        
        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoLogoFile.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoLogoFile.name}`

        writeFileSync(fsPhotoPath, Buffer.from(await photoLogoFile.arrayBuffer()))
        photoLogo = dbPhotoPath

      }

      const projet = await db.projet.upsert({
        where: {
          id
        },
        create: {
          titre,
          photo,
          photoLogo,
          descriptionCourte,
          contenu,
        },
        update: {
          titre,
          photo,
          photoLogo,
          descriptionCourte,
          contenu,
        },
      })

      return {
        data: projet,
        errorMsg: undefined,
      };


    } catch (err) {

      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement du projet",
      });

    }



  },


  delete: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { id = null } = data

    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data: data,
        errorMsg: "❌ L'identifiant du projet est requis",
      });
    }

    try {

      const projetToDelete = await db.projet.findUnique({
        where: {
          id
        }
      })

      if (projetToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "Le projet n'existe pas",
        });
      }

      await db.projet.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression du projet",
      });

    }
  },
};

