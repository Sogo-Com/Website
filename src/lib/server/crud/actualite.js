import { IsJsonString,  IsEmptyFile, IsString, IsStringNotEmpty, IsObject, IsPhoto, IsFile, GetExtension } from "../../utils/type";
import { Base64toWebp, ToBase64RawString } from "../../utils/convert";
import { uuid } from "../../utils/random";
import { db } from '$lib/database'
import { json , error} from '@sveltejs/kit'
import { writeFile, writeFileSync } from 'fs';
import { PUBLIC_UPLOADS_DIR } from '$env/static/public'

const FULL_UPLOAD_PATH =`${PUBLIC_UPLOADS_DIR}actualites/`
const PARTIAL_UPLOAD_PATH ="/uploads/actualites/"

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

        let { id = '', titre = '',photo = '',photoFile = '', tempsLecture = '', redacteur = '', descriptionCourte = '', contenu= {} } = actualite
      

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

        
        if(!IsJsonString(contenu) ){
            throw error(400, {
                message:"Contenu mal formaté"
            })
        }

        try{

            if(IsPhoto(photoFile)){

                const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoFile.name}`
                const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoFile.name}`
            
                writeFileSync(fsPhotoPath,  Buffer.from(await photoFile.arrayBuffer()))
                photo = dbPhotoPath
                
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