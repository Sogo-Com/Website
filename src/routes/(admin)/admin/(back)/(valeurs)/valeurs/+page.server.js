import { fail, redirect } from '@sveltejs/kit'
import { IsStringNotEmpty,} from "$lib/utils/type";
import { db } from '$lib/database'



export const load = async (serverloadEvent) =>{
   
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const valeurs = await db.valeur.findMany()
  return {
    valeurs
  }
}

export const actions = {
  
  delete: async ({ request, locals}) => {
    
    const data = Object.fromEntries(await request.formData());
    const { id = null } = data

    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN" ) {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data: data,
        errorMsg: "❌ L'identifiant de la valeur est requise",
      });
    }

    try {

      const valeurToDelete = await db.valeur.findUnique({
        where: {
          id
        }
      })

      if (valeurToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "Le valeur n'existe pas",
        });
      }

      await db.valeur.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression de la valeur",
      });

    }
  },
};

