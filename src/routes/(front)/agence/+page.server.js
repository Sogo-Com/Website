
import { db } from '$lib/database'

export const load = async (serverloadEvent) =>{
  const valeurs = await db.valeur.findMany()
  const collaborateurs = await db.collaborateur.findMany()
  const pointsHistoriques = await db.pointHistoire.findMany()
	let pageAgence = await db.pageAgence.findUnique({
		where: {
			id: '1'
		}
	});


  return {
    valeurs,
    pageAgence,
    collaborateurs,
    pointsHistoriques
  }
}

