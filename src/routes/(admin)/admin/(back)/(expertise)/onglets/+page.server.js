import { fail, redirect } from '@sveltejs/kit'
import { IsStringNotEmpty,} from "$lib/utils/type";
import { db } from '$lib/database'



export const load = async (serverloadEvent) =>{
   
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const expertiseOnglets = await db.expertiseOnglet.findMany()
  return {
    expertiseOnglets
  }
}

export const actions = {
  
  delete: async ({ request, locals}) => {
    


    const data = Object.fromEntries(await request.formData());

    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN" ) {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    
    const { id = null } = data

    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data: data,
        errorMsg: "❌ L'identifiant de l'actualité est requis",
      });
    }

    try {

      const expertiseOngletToDelete = await db.expertiseOnglet.findUnique({
        where: {
          id
        }
      })

      if (expertiseOngletToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "L'onglet n'existe pas",
        });
      }

      await db.expertiseOnglet.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression de l'onglet",
      });

    }
  },
};

