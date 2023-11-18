import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/database'


export const load = async (serverloadEvent) =>{

  const actualite = await db.actualite.findFirst({})
  const projet = await db.projet.findFirst({})
  return {
    actualite,
    projet
  }
}

