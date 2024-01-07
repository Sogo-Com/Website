

import { db } from '$lib/database'
import { redirect } from '@sveltejs/kit';

export const load = async (serverloadEvent) =>{

  const { params } = serverloadEvent;
  const { id } = params;
  
  const client = await db.client.findUnique({
    where: {
      id
    }
  })
  
  if (client == null) {
    throw redirect (302, '/presse')
  }

  return {
    client
  }
}

