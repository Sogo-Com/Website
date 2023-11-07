import { IsJsonString, IsString } from "./utils/type";
import { db } from '$lib/database'

export default {

    endpoint : '/api/actualite',

    delete : (id) => {

        return new Promise(async (resolve,reject) => {
            
      
            if(!IsString(id))
                reject("id isn't a typeof string")


            const deleteActualite = await db.actualite.delete({
                where: {
                    id
                },
            })

            resolve(deleteActualite)
            // const body = JSON.stringify({ id })

            // const response = await fetch(this.endpoint, {
            //     method: 'DELETE',
            //     body,
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });

            // const result = await response.json();
            // if (result.success) {
            //     const { data = {} } = result;
            //     resolve(data)
            // }

        })

    },

    upsert : async (actualite) => {



    }

}