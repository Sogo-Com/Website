import { fail, redirect } from '@sveltejs/kit'
import { IsStringNotEmpty,} from "$lib/utils/type";
import { db } from '$lib/database'



export const load = async (serverloadEvent) =>{
   
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const attachePresses = await db.attachePresse.findMany()
  return {
    attachePresses
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
        errorMsg: "❌ L'identifiant de l'attaché de presse est requis",
      });
    }

    try {

      const attachePresseToDelete = await db.attachePresse.findUnique({
        where: {
          id
        }
      })

      if (attachePresseToDelete == null) {
        return fail(400, {
          data: data,
          errorMsg: "L'attaché de presse n'existe pas",
        });
      }

      await db.attachePresse.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression de l'attaché de presse",
      });

    }
  },
};

