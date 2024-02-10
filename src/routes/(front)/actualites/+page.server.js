import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/database'


export const load = async (serverloadEvent) =>{

  const actualites = await db.actualite.findMany()
  const pageActualite = await db.pageActualite.findUnique({
    where: {
      id: '1'
    }
  })
  return {
    pageActualite,
    actualites
  }
}

