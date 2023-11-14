import { fail, redirect,invalid } from '@sveltejs/kit'
import { IsJsonString, IsEmptyFile, IsString, IsStringNotEmpty, IsObject, IsPhoto, IsFile, GetExtension } from "$lib/utils/type";

import bcrypt from 'bcrypt'
import { db } from '$lib/database'
import { writeFileSync } from 'fs';

const FULL_UPLOAD_PATH = `uploads/actualites/`
const PARTIAL_UPLOAD_PATH = "/uploads/actualites/"


export const load = async (serverloadEvent) => {

  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const { params } = serverloadEvent
  const { idActualite = '' } = params
  let actualite = await db.actualite.findUnique({
    where: {
      id: idActualite
    }
  })

  actualite = actualite == null ? {} : actualite

  return {
    actualite
  }
}


export const actions = {
  create: async ({ request }) => {
    console.log("Hit action");
    const data = Object.fromEntries(await request.formData());

    let { id, titre, redacteur, tempsLecture, descriptionCourte, contenu, photo, photoFile } = data

    if (titre.length < 1) {
      return invalid(400, {
        data: data,
        errorMsg: "❌ Le titre ne doit pas être vide",
      });
    }

    if (redacteur.length < 1) {
      return invalid(400, {
        data: data,
        errorMsg: "❌ Le redacteur ne doit pas être vide",
      });
    }

    if (tempsLecture.length < 1) {
      return invalid(400, {
        data: data,
        errorMsg: "❌ Le temps de lecture ne doit pas être vide",
      });
    }

    if (descriptionCourte.length < 1) {
      return invalid(400, {
        data: data,
        errorMsg: "❌ La description courte ne doit pas être vide",
      });
    }

    try {

      
      if (IsPhoto(photoFile)) {

        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoFile.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoFile.name}`

        writeFileSync(fsPhotoPath, Buffer.from(await photoFile.arrayBuffer()))
        photo = dbPhotoPath

      }

      const actualite = await db.actualite.upsert({
        where: {
          id
        },
        create: {
          titre,
          photo,
          redacteur,
          tempsLecture,
          descriptionCourte,
          contenu,
        },
        update: {
          titre,
          photo,
          redacteur,
          tempsLecture,
          descriptionCourte,
          contenu,
        },
      })

      return {
        data: actualite,
        errorMsg: undefined,
      };


    } catch (err) {

      return invalid(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement de l'actualité",
      });

    }



  },


  delete: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { id = null } = data

    if (!IsStringNotEmpty(id)) {
      return invalid(400, {
        data: data,
        errorMsg: "❌ L'identifiant de l'actualité est requis",
      });
    }

    try {

      const actualiteToDelete = await db.actualite.findUnique({
        where: {
          id
        }
      })

      if (actualiteToDelete == null) {
        return invalid(400, {
          data: data,
          errorMsg: "L'actualité n'existe pas",
        });
      }

      await db.actualite.delete({
        where: {
          id
        },
      })

      return {
        data: undefined,
        errorMsg: undefined,
      };

    } catch (err) {

      return invalid(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de la suppression de l'actualité",
      });

    }
  },
};

