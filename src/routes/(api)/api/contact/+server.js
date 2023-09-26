import { db } from '$lib/database'

export async function POST(req) {
    let { langCode } = req.params
    let { request } = req

    let { nom, prenom, email, telephone } = await request.json()
    const contact = await db.contact.create({
        data: {
            nom,
            prenom,
            email,
            telephone
        },
    })
    console.log(contact)
    return new Response(JSON.stringify({
        status: 200,
        success: 'Contact created successfully'
    }), {
        headers: {

            'Content-Type': 'application/json'
        }
    })
}


export async function DELETE(req) {
    let { langCode } = req.params
    let { request } = req

    let { id } = await request.json()
    console.log(id)
    const deleteContact = await db.contact.delete({
        where: {
            id
        },
    })
    return new Response(JSON.stringify({
        status: 200,
        success: 'Contact deleted Successfully'
    }), {
        headers: {

            'Content-Type': 'application/json'
        }
    })
}