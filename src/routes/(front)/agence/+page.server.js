
import { db } from '$lib/database'

export const load = async (serverloadEvent) =>{

  const collaborateurs = await db.collaborateur.findMany()
  return {
    collaborateurs
  }
}

