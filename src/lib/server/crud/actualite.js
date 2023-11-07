import { IsJsonString, IsString } from "../../utils/type";
import { db } from '$lib/database'
import { json , error} from '@sveltejs/kit'

export default {

    delete : async (id) => {

            const body = {
                message:"Actualité supprimé",
                data:{}
            }

            try{

                await db.actualite.delete({
                    where: {
                        id
                    },
                })

            }catch(err){
           
                const { status = 500, message = "server error" } = err

                throw error(status, {
                    message
                })
            }
           
            return json(body)


    },

    upsert : async (actualite) => {


        let { id = '', titre, tempsLecture, redacteur, contenu } = await request.json()
        contenu = JSON.stringify(contenu)
    
        const actualite = await db.actualite.upsert({
            where: {
                id
            },
            create: {
                titre,
                redacteur,
                tempsLecture,
                contenu,
            },
            update: {
                titre,
                redacteur,
                tempsLecture,
                contenu,
            },
        })
    
        return new Response(JSON.stringify({
            status: 200,
            success: 'Actualite saved Successfully',
            data:actualite
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }

}