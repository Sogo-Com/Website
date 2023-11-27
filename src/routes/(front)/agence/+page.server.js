
import { db } from '$lib/database'

export const load = async (serverloadEvent) =>{

  const collaborateurs = await db.collaborateur.findMany()
  const pointsHistoriques = await db.pointHistoire.findMany()
  return {
    collaborateurs,
    pointsHistoriques
  }
}

