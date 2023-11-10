import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/database'



export const load = async (serverloadEvent) =>{
   
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const actualites = await db.actualite.findMany()
  return {
    actualites
  }
}

