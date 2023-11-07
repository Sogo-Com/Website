import { IsJsonString, IsString } from "../../utils/type";
import { db } from '$lib/database'
import { json , error} from '@sveltejs/kit'

export default {

    endpoint : '/api/actualite',

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



    }

}