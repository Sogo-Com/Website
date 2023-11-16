import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/database'


export const load = async (serverloadEvent) =>{

  const { params } = serverloadEvent
  const { idProjet = '' } = params

  const projet = await db.projet.findUnique({
    where: {
      id:idProjet,
    },
  })

  if (!projet) {
    throw redirect(301,"/projets")
  }

  return {
    projet
  }
}

