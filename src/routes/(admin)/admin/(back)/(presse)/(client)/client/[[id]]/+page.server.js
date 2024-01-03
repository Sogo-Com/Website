import { fail, redirect } from '@sveltejs/kit'
import { IsJsonString, IsEmptyFile, IsString, IsStringNotEmpty, IsObject, IsPhoto, IsFile, GetExtension } from "$lib/utils/type";

import bcrypt from 'bcrypt'
import { db } from '$lib/database'
import { writeFileSync, existsSync, mkdirSync } from 'fs';

const FULL_UPLOAD_PATH = `uploads/clients/`
const PARTIAL_UPLOAD_PATH = "/uploads/clients/"


export const load = async (serverloadEvent) => {

  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const { params } = serverloadEvent
  const { id = '' } = params
  let client = await db.client.findUnique({
    include: {
      attachePresses: true
    },
    where: {
      id
    }

  })

  let domaines = await db.domaine.findMany({})
  let attachePresses = await db.attachePresse.findMany({
    where: {
      id: { notIn: (client != null ? client.attachePresses.map(attache => attache.id) : []) },
    }
  })

  client = client == null ? {} : client

  return {
    client,
    domaines,
    attachePresses
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

    let { id, domaineId, nom, photoLogo, photoLogoFile ,photoAvant1,photoAvant1File,photoAvant2,photoAvant2File} = data

    console.log(data)

    if (nom.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le nom ne doit pas être vide",
      });
    }

    try {


      if (IsPhoto(photoLogoFile)) {


        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }


        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoLogoFile.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoLogoFile.name}`

        writeFileSync(fsPhotoPath, Buffer.from(await photoLogoFile.arrayBuffer()))
        photoLogo = dbPhotoPath

      }


      
      if (IsPhoto(photoAvant1File)) {


        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }


        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoAvant1File.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoAvant1File.name}`

        writeFileSync(fsPhotoPath, Buffer.from(await photoAvant1File.arrayBuffer()))
        photoAvant1 = dbPhotoPath

      }



      
      if (IsPhoto(photoAvant2File)) {


        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }


        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoAvant2File.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoAvant2File.name}`

        writeFileSync(fsPhotoPath, Buffer.from(await photoAvant2File.arrayBuffer()))
        photoAvant2 = dbPhotoPath

      }


      const upserted = await db.client.upsert({
        where: {
          id
        },
        create: {
          nom,
          photoLogo,
          photoAvant1,
          photoAvant2,
          domaine:{
            connect:{
              id:domaineId
            }
          }
        },
        update: {
          nom,
          photoLogo,
          photoAvant1,
          photoAvant2,
          domaine:{
            connect:{
              id:domaineId
            }
          }
        },
      })

      const client = await db.client.findUnique({
        include: {
          attachePresses: true
        },
        where: {
          id:upserted.id
        }
      })

      console.log(client)
      return {
        data: client,
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
        errorMsg: "❌ L'identifiant du client est requis",
      });
    }

    try {

      const clientToDelete = await db.client.findUnique({
        where: {
          id
        }
      })

      if (clientToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "Le client n'existe pas",
        });
      }

      await db.client.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression du client",
      });

    }
  },


  createAttache: async ({ request, locals }) => {


    const data = Object.fromEntries(await request.formData());
    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    let { idClient, idAttache } = data


    try {

      await db.client.update({
        where: {
          id: idClient
        },
        data: {
          attachePresses: {
            connect: {
              id: idAttache
            }
          },

        },
      })

      const client = await db.client.findUnique({
        include: {
          attachePresses: true
        },
        where: {
          id: idClient
        }
      })
      return {
        data: {
          client,
          attachePresses: await db.attachePresse.findMany({
            where: {
              id: { notIn: client.attachePresses.map(attache => attache.id) },
            }
          })
        },
        errorMsg: undefined,
      };


    } catch (err) {

      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement du client",
      });


      

    }



  },


  deleteAttache: async ({ request, locals }) => {



    const data = Object.fromEntries(await request.formData());
    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    let { idClient, idAttache } = data


    try {

      await db.client.update({
        where: {
          id: idClient
        },
        data: {
          attachePresses: {
            disconnect: {
              id: idAttache
            }
          },

        },
      })

      const client = await db.client.findUnique({
        include: {
          attachePresses: true
        },
        where: {
          id: idClient
        }
      })

  
      return {
        data: {
          client,
          attachePresses: await db.attachePresse.findMany({
            where: {
              id: { notIn: client.attachePresses.map(attache => attache.id) },
            }
          })
        },
        errorMsg: undefined,
      };

    } catch (err) {


      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement du client",
      });

    }

  },
};

