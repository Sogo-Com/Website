import { db } from '$lib/database'
import { error } from '@sveltejs/kit';
import ActualiteCRUD from '$lib/server/crud/actualite'


export async function POST(event) {
  
    let { locals, request } = event;

    if (!locals.user) {
      throw error(403)
    }

    const formData = await request.formData()
    const object = Object.fromEntries(formData)
    return await ActualiteCRUD.upsert(object)
}

export async function DELETE(event) {

    let { locals, request } = event;

    if (!locals.user) {
      throw error(403)
    }
    let { id } = await request.json()

    return await ActualiteCRUD.delete(id)


}