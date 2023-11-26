import { fail, redirect } from '@sveltejs/kit'
import { db } from '$lib/database'


export const load = async (serverloadEvent) => {

  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, '/admin/login')
  }

  const { params } = serverloadEvent
  const { id = '' } = params
  let pointHistoire = await db.pointHistoire.findUnique({
    where: {
      id
    }
  })

  if (pointHistoire == null) {
    throw redirect(302, '/admin/pointHistoires')
  }

  return {
    pointHistoire
  }
}


export const actions = {
  create:  async ({ request, locals}) => {
    
   
    const data = Object.fromEntries(await request.formData());

    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN" ) {
      return fail(400, {
        data: data,
        errorMsg: "Vous n'etes pas connecté",
      });
    }

    let { id, date, titre, description } = data


    if (date.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ La date ne doit pas être vide",
      });
    }

    if (titre.length < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Le titre ne doit pas être vide",
      });
    }

    if (titre.description < 1) {
      return fail(400, {
        data: data,
        errorMsg: "❌ La description ne doit pas être vide",
      });
    }




    try {

     
      const pointHistoire = await db.pointHistoire.update({
        where: {
          id : id.toString()
        },
        data: {
          date,
          titre,
          description,
        },
      })

      return {
        data: pointHistoire,
        errorMsg: undefined,
      };


    } catch (err) {
      return fail(400, {
        data: data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement du point-historique",
      });

    }



  },

};

