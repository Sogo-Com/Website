import { IsJsonString, IsObject, IsStringNotEmpty } from "../../utils/type";


const API_ENDPOINT = '/api/actualite'

export default {

    delete: (id) => {

        return new Promise(async (resolve, reject) => {
            
            try {

                if (!IsStringNotEmpty(id))
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

    upsert: async (formData) => {

        return new Promise(async (resolve, reject) => {
            
            try {
             
                if (!IsObject(formData))
                    reject("L'actualite n'est pas un objet")
              

                const response = await fetch(API_ENDPOINT, {
                    method: 'POST',
                    body:formData,
                });

                const result = await response.json();

                if (response.status == 200) {
                    
                    result.data.contenu  = typeof result.data.contenu === 'string' && IsJsonString(result.data.contenu) 
                    ?  JSON.parse(result.data.contenu) 
                    :  null

                    resolve(result)
                }else
                {
                    reject(result.message)
                }

            } catch (err) {
                reject("Une erreur est survenue")
            }

        })


    }

}