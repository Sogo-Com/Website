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
  let domaine = await db.domaine.findUnique({
    where: {
      id
    }
  })

  domaine = domaine == null ? {} : domaine

  return {
    domaine
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

    let { id, nom } = data

    if (nom.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le nom ne doit pas être vide",
      });
    }

    try {

      const domaine = await db.domaine.upsert({
        where: {
          id
        },
        create: {
          nom,
        },
        update: {
          nom,
        },
      })

      return {
        data: domaine,
        errorMsg: undefined,
      };


    } catch (err) {

      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement du domaine",
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
        errorMsg: "❌ L'identifiant du domaine est requis",
      });
    }

    try {

      const domaineToDelete = await db.domaine.findUnique({
        where: {
          id
        }
      })

      if (domaineToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "Le domaine n'existe pas",
        });
      }

      await db.domaine.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression du domaine",
      });

    }
  },
};

