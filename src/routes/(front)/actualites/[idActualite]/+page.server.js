import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/database'


export const load = async (serverloadEvent) =>{

  const { params } = serverloadEvent
  const { idActualite = '' } = params

  const actualite = await db.actualite.findUnique({
    where: {
      id:idActualite,
    },
  })

  if (!actualite) {
    throw redirect(301,"/actualites")
  }

  return {
    actualite
  }
}

