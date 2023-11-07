import { IsJsonString, IsString } from "../../utils/type";
import { db } from '$lib/database'

const API_ENDPOINT = '/api/actualite'

export default {

    delete: (id) => {

        return new Promise(async (resolve, reject) => {
            
            try {

                if (!IsString(id))
                    reject("L'id de l'actualité n'est pas un 'string'")
                

                const body = JSON.stringify({ id })

                const response = await fetch(API_ENDPOINT, {
                    method: 'DELETE',
                    body,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const result = await response.json();

                if (response.status == 200) {
                    resolve(result)
                }else
                {
                    reject(result.message)
                }

            } catch (err) {
                reject("Une erreur est survenue")
            }

        })

    },

    upsert: async (actualite) => {



    }

}