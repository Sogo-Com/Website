

import { db } from '$lib/database'

export const load = async (serverloadEvent) =>{

  const domaines = await db.domaine.findMany()
  const clients = await db.client.findMany()
  
  return {
    domaines,
    clients
  }
}


export const actions = {


    search: async ({ request, locals}) => {


    }

}
