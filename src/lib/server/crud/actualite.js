import { IsJsonString, IsString, IsStringNotEmpty, IsObject } from "../../utils/type";
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

        const body = {
            message:"Actualité enregistré",
            data:{}
        }

        let { id = '', titre = '', tempsLecture = '', redacteur = '', contenu= {} } = actualite

        if(!IsStringNotEmpty(titre)){
            throw error(400, {
                message:"Titre vide"
            })
        }
        if(!IsStringNotEmpty(tempsLecture)){
            throw error(400, {
                message:"Aucun temps de lecture"
            })
        }
        if(!IsStringNotEmpty(redacteur)){
            throw error(400, {
                message:"Aucun rédacteur"
            })
        }
        if(!IsObject(contenu) ){
            throw error(400, {
                message:"Contenu mal formaté"
            })
        }

        try{

            contenu = JSON.stringify(contenu)
            
            body.data  = await db.actualite.upsert({
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

        }catch(err){
       
            const { status = 500, message = "server error" } = err

            throw error(status, {
                message
            })
        }

        return json(body) 
    
    }

}