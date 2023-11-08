import { IsJsonString, IsString, IsStringNotEmpty, IsObject, IsPhoto, IsFile } from "../../utils/type";
import { db } from '$lib/database'
import { json , error} from '@sveltejs/kit'
import { writeFileSync } from 'fs';

const UPLOAD_PATH ="/uploads/actualites/"

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

        console.log(writeFileSync())

        const body = {
            message:"Actualité enregistré",
            data:{}
        }

        let { id = '', titre = '',photo = '', tempsLecture = '', redacteur = '', descriptionCourte = '', contenu= {} } = actualite

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

        if(!IsString(descriptionCourte)){
            throw error(400, {
                message:"Description courte n'est pas correcte"
            })
        }


        
        if(!IsString(photo) || !IsFile(photo) || !IsPhoto(photo)){
            throw error(400, {
                message:"Photo incorrecte"
            })
        }

        
        if(!IsObject(contenu) ){
            throw error(400, {
                message:"Contenu mal formaté"
            })
        }

        try{

            contenu = JSON.stringify(contenu)


            if(IsPhoto(photo)){

                const finalPath = `${UPLOAD_PATH}${photo.name}`
                writeFileSync(finalPath, Buffer.from(await photo.arrayBuffer()));
                photo = finalPath
                
            }
    
            body.data  = await db.actualite.upsert({
                where: {
                    id
                },
                create: {
                    titre,
                    photo,
                    redacteur,
                    tempsLecture,
                    descriptionCourte,
                    contenu,
                },
                update: {
                    titre,
                    photo,
                    redacteur,
                    tempsLecture,
                    descriptionCourte,
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