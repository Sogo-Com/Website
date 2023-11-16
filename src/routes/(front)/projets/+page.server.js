import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/database'


export const load = async (serverloadEvent) => {

  const projets = await db.projet.findMany()
  return {
    projets
  }
}


export const actions = {



  find: async ({ request, locals }) => {

    try {

      const data = Object.fromEntries(await request.formData());
      const { typeProjet = null } = data

      const projets = await db.projet.findMany({
        where: {
          typeProjet
        }
      })

      if(projets == null || projets.length == 0){
        return fail(400, {
          data: undefined,
          errorMsg: "❌ Aucun projet trouvé",
        });
      }

      return {
        data: projets,
        errorMsg: undefined,
      };

    } catch (e) {
      fail(400, {
        data: undefined,
        errorMsg: "❌ Erreur lors de la recherche",
      });
    }
  },


};


