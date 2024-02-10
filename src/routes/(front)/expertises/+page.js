export let csr = true;
export let ssr = true;
export const prerender = false;

import { error } from "@sveltejs/kit";

export const load = async (loadEvent) =>{

    const { data } = loadEvent;
    return data
    
}