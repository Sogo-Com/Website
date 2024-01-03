import { fail, redirect } from '@sveltejs/kit'
import { IsJsonString, IsEmptyFile, IsString, IsStringNotEmpty, IsObject, IsPhoto, IsFile, GetExtension } from "$lib/utils/type";

import bcrypt from 'bcrypt'
import { db } from '$lib/database'
import { writeFileSync,existsSync, mkdirSync } from 'fs';



export const load = async (serverloadEvent) => {

  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const { params } = serverloadEvent
  const { id = '' } = params
  let attachePresse = await db.attachePresse.findUnique({
    where: {
      id
    }
  })

  attachePresse = attachePresse == null ? {} : attachePresse

  return {
    attachePresse
  }
}


export const actions = {

 

  create: async ({ request, locals}) => {
    
 
    const data = Object.fromEntries(await request.formData());
    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN" ) {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    let { id, nom, telephone, email } = data

    if (nom.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le nom ne doit pas être vide",
      });
    }

    if (telephone.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le telephone ne doit pas être vide",
      });
    }

    if (email.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ L'email ne doit pas être vide",
      });
    }

    try {

      const attachePresse = await db.attachePresse.upsert({
        where: {
          id
        },
        create: {
          nom,
          telephone,
          email
        },
        update: {
          nom,
          telephone,
          email
        },
      })

      return {
        data: attachePresse,
        errorMsg: undefined,
      };


    } catch (err) {

      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement l'attaché de presse",
      });

    }



  },


  delete: async ({ request, locals}) => {

    const data = Object.fromEntries(await request.formData());

    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN" ) {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    const { id = null } = data

    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data: data,
        errorMsg: "❌ L'identifiant de l'attaché de presse est requis",
      });
    }

    try {

      const attachePresseToDelete = await db.attachePresse.findUnique({
        where: {
          id
        }
      })

      if (attachePresseToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "L'attaché de presse n'existe pas",
        });
      }

      await db.attachePresse.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression de l'attaché de presse",
      });

    }
  },
};

