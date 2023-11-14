import { fail, redirect } from '@sveltejs/kit'
import { IsStringNotEmpty,} from "$lib/utils/type";
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

export const actions = {
  
  delete: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { id = null } = data

    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data: data,
        errorMsg: "❌ L'identifiant de l'actualité est requis",
      });
    }

    try {

      const actualiteToDelete = await db.actualite.findUnique({
        where: {
          id
        }
      })

      if (actualiteToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "L'actualité n'existe pas",
        });
      }

      await db.actualite.delete({
        where: {
          id
        },
      })

      return {
        data: undefined,
        errorMsg: undefined,
      };
     

    } catch (err) {

      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de la suppression de l'actualité",
      });

    }
  },
};

