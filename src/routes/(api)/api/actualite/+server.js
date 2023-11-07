import { db } from '$lib/database'
import { error } from '@sveltejs/kit';

export async function POST(event) {
  
    let { locals, request } = event;

    if (!locals.user) {
      throw error(403)
    }
    
    let { titre, tempsLecture, redacteur, contenu } = await request.json()
    contenu = JSON.stringify(contenu)

    const actualite = await db.actualite.create({
        data: {
            titre,
            redacteur,
            tempsLecture,
            contenu,
        },
    })

    return new Response(JSON.stringify({
        status: 200,
        success: 'Actualite saved Successfully'
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export async function DELETE(event) {

    let { locals, request } = event;

    if (!locals.user) {
      throw error(403)
    }
    let { id } = await request.json()

    const deleteActualite = await db.actualite.delete({
        where: {
            id
        },
    })
    return new Response(JSON.stringify({
        status: 200,
        success: 'Actualite deleted Successfully'
    }), {
        headers: {

            'Content-Type': 'application/json'
        }
    })
}