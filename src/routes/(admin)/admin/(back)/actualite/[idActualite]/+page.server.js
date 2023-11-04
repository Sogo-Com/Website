import { fail, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'
import { db } from '$lib/database'



export const load = async (serverloadEvent) =>{
   
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const {params} = serverloadEvent

  const actualite = await db.actualite.findUnique({
    where:{
      id:params.idActualite
    }
  })

  if(actualite == null){
    throw redirect(302, '/admin/actualites')
  }

  return {
    actualite
  }
}

