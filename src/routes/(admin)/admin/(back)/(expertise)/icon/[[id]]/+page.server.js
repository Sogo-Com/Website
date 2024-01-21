import { fail, redirect } from '@sveltejs/kit'
import { IsJsonString,StringToBoolean, IsEmptyFile, IsString, IsStringNotEmpty, IsObject, IsPhoto,IsVideo, IsFile, GetExtension } from "$lib/utils/type";

import bcrypt from 'bcrypt'
import { db } from '$lib/database'
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { type } from 'os';

const FULL_UPLOAD_PATH = `uploads/expertiseIcons/`
const PARTIAL_UPLOAD_PATH = "/uploads/expertiseIcons/"


export const load = async (serverloadEvent) => {

  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const { params } = serverloadEvent
  const { id = '' } = params
  let expertiseIcon = await db.expertiseIcon.findUnique({
    where: {
      id
    }
  })

  expertiseIcon = expertiseIcon == null ? {} : expertiseIcon

  return {
    expertiseIcon
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

    let { id, titre, description, isVideoChecked, rang, photoIconActive, photoIconInactive, photoIllustration, photoIconActiveFile, photoIconInactiveFile, photoIllustrationFile } = data

    if (titre.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le titre ne doit pas être vide",
      });
    }

    if (description.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ La description ne doit pas être vide",
      });
    }
    

    if (rang == null || isNaN(rang) || parseInt(rang) < 0) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le rang ne doit pas être vide",
      });
    }

    try {


      if (IsPhoto(photoIconActiveFile)) {

        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }

        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoIconActiveFile.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoIconActiveFile.name}`



        writeFileSync(fsPhotoPath, Buffer.from(await photoIconActiveFile.arrayBuffer()))
        photoIconActive = dbPhotoPath

      }


      if (IsPhoto(photoIconInactiveFile)) {

        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }

        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoIconInactiveFile.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoIconInactiveFile.name}`



        writeFileSync(fsPhotoPath, Buffer.from(await photoIconInactiveFile.arrayBuffer()))
        photoIconInactive = dbPhotoPath

      }


      if (IsPhoto(photoIllustrationFile) || IsVideo(photoIllustrationFile)) {

        console.log("ici")
        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }

        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoIllustrationFile.name}`
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoIllustrationFile.name}`



        writeFileSync(fsPhotoPath, Buffer.from(await photoIllustrationFile.arrayBuffer()))
        photoIllustration = dbPhotoPath

      }


      const expertiseIcon = await db.expertiseIcon.upsert({
        where: {
          id
        },
        create: {
          titre,
          description,
          isVideo : StringToBoolean(isVideoChecked),
          rang : parseInt(rang),
          photoIconActive,
          photoIconInactive,
          photoIllustration,

        },
        update: {
          titre,
          description,
          isVideo : StringToBoolean(isVideoChecked),
          rang : parseInt(rang),
          photoIconActive,
          photoIconInactive,
          photoIllustration,
        },
      })

      return {
        data: expertiseIcon,
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

      const expertiseIconToDelete = await db.expertiseIcon.findUnique({
        where: {
          id
        }
      })

      if (expertiseIconToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "L'icon n'existe pas",
        });
      }

      await db.expertiseIcon.delete({
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
};

