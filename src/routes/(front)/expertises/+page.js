export let csr = true;
export let ssr = true;
export const prerender = true;

import { error } from "@sveltejs/kit";

export const load = async (loadEvent) =>{

    const { data } = loadEvent;
    return data
    
}