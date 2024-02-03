import { fail, redirect } from '@sveltejs/kit'
import { IsJsonString,StringToBoolean, IsEmptyFile, IsString, IsStringNotEmpty, IsObject, IsPhoto,IsVideo, IsFile, GetExtension } from "$lib/utils/type";

import bcrypt from 'bcrypt'
import { db } from '$lib/database'
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { type } from 'os';

const FULL_UPLOAD_PATH = `uploads/expertiseOnglets/`
const PARTIAL_UPLOAD_PATH = "/uploads/expertiseOnglets/"


export const load = async (serverloadEvent) => {

  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const { params } = serverloadEvent
  const { id = '' } = params
  let expertiseOnglet = await db.expertiseOnglet.findUnique({
    where: {
      id
    },
    include: {
      expertiseIcons: true,
    },
  })

  expertiseOnglet = expertiseOnglet == null ? {} : expertiseOnglet

  let expertiseIcons = await db.expertiseIcon.findMany({
    where: {
      id: { notIn: (expertiseOnglet != null ? expertiseOnglet.expertiseIcons.map(exp => exp.id) : []) },
    }
  })

  return {
    expertiseOnglet,
    expertiseIcons
  }
}


export const actions = {



  create: async ({ request, locals }) => {


    const data = Object.fromEntries(await request.formData());
    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    let { id,titre, cssClass ,rang,   description, photoPrincipale, photoPrincipaleFile } = data

    if (titre.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le titre ne doit pas être vide",
      });
    }


    
    if (cssClass.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ La class css ne doit pas être vide",
      });
    }

    if (rang == null || isNaN(rang) || parseInt(rang) < 0) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le rang ne doit pas être vide",
      });
    }

    try {


      if (IsPhoto(photoPrincipaleFile)) {

        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }

        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoPrincipaleFile.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoPrincipaleFile.name}`



        writeFileSync(fsPhotoPath, Buffer.from(await photoPrincipaleFile.arrayBuffer()))
        photoPrincipale = dbPhotoPath

      }


      const expertiseOnglet = await db.expertiseOnglet.upsert({
        where: {
          id
        },
        create: {
          titre,
          cssClass,
          description,
          rang : parseInt(rang),
          photoPrincipale,

        },
        update: {
          titre,
          cssClass,
          description,
          rang : parseInt(rang),
          photoPrincipale,
        },
      })

      return {
        data: expertiseOnglet,
        errorMsg: undefined,
      };


    } catch (err) {
      console.log(err)
      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement de l'icon",
      });

    }



  },


  delete: async ({ request, locals }) => {

    const data = Object.fromEntries(await request.formData());

    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    const { id = null } = data

    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data: data,
        errorMsg: "❌ L'identifiant de l'icon est requis",
      });
    }

    try {

      const expertiseOngletToDelete = await db.expertiseOnglet.findUnique({
        where: {
          id
        }
      })

      if (expertiseOngletToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "L'icon n'existe pas",
        });
      }

      await db.expertiseOnglet.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression de l'icon",
      });

    }
  },




  createIcon: async ({ request, locals }) => {


    const data = Object.fromEntries(await request.formData());
    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    let { idOnglet, idIcon } = data


    try {

      await db.expertiseOnglet.update({
        where: {
          id: idOnglet
        },
        data: {
          expertiseIcons: {
            connect: {
              id: idIcon
            }
          },

        },
      })

      const expertiseOnglet = await db.expertiseOnglet.findUnique({
        include: {
          expertiseIcons:true,
        },
        where: {
          id: idOnglet
        }
      })
      return {
        data: {
          expertiseOnglet,
          expertiseIcons: await db.expertiseIcon.findMany({
            where: {
              id: { notIn: expertiseOnglet.expertiseIcons.map(attache => attache.id) },
            }
          })
        },
        errorMsg: undefined,
      };


    } catch (err) {

      console.log(err)
      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement du client",
      });


      

    }



  },


  deleteIcon: async ({ request, locals }) => {



    const data = Object.fromEntries(await request.formData());
    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    let { idIcon, idOnglet } = data


    try {

      await db.expertiseOnglet.update({
        where: {
          id: idOnglet
        },
        data: {
          expertiseIcons: {
            disconnect: {
              id: idIcon
            }
          },

        },
      })

      const expertiseOnglet = await db.expertiseOnglet.findUnique({
        include: {
          expertiseIcons: true,
        },
        where: {
          id: idOnglet
        }
      })

  
      return {
        data: {
          expertiseOnglet,
          expertiseIcons: await db.expertiseIcon.findMany({
            where: {
              id: { notIn: expertiseOnglet.expertiseIcons.map(attache => attache.id) },
            }
          })
        },
        errorMsg: undefined,
      };

    } catch (err) {

      console.log(err)
      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement du client",
      });

    }

  },


};

