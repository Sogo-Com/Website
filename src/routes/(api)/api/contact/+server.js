import { db } from '$lib/database'

export async function POST(req){
    let { langCode } = req.params
    let {request} = req
    
    let {nom,prenom,email,telephone} =  await request.json()
    const contact = await db.contact.create({
        data: {
            nom,
            prenom,
            email,
            telephone
        },
    })
    return new Response(JSON.stringify({}),{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}