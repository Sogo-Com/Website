import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/database'


export const load = async (serverloadEvent) =>{

  const projets = await db.projet.findMany()
  return {
    projets
  }
}

