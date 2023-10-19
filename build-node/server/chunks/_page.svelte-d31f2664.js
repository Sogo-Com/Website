import { c as create_ssr_component, e as escape, b as add_attribute, d as each } from './index3-ec5c8fd3.js';
import './index5-2fb00356.js';
import './index2-8abc0c01.js';

const css = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}.contact-table.svelte-1b6rbvp.svelte-1b6rbvp{width:100%;border-collapse:collapse}.contact-table.svelte-1b6rbvp th.svelte-1b6rbvp,.contact-table.svelte-1b6rbvp td.svelte-1b6rbvp{border:1px solid var(--color-gris-clair);padding:10px;text-align:left}.contact-table.svelte-1b6rbvp th a.svelte-1b6rbvp,.contact-table.svelte-1b6rbvp td a.svelte-1b6rbvp{color:#000}.contact-table.svelte-1b6rbvp th a.svelte-1b6rbvp:hover,.contact-table.svelte-1b6rbvp td a.svelte-1b6rbvp:hover{color:var(--color-rose)}.contact-table.svelte-1b6rbvp th.svelte-1b6rbvp{background-color:var(--color-jaune);color:var(--color-blanc);font-family:var(--font-secondary-bold)}.contact-table.svelte-1b6rbvp td.svelte-1b6rbvp{font-family:var(--font-secondary-regular)}.contact-table.svelte-1b6rbvp .delete-button.svelte-1b6rbvp{background-color:var(--color-rose);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;width:100%;transition:background-color 0.3s ease}.contact-table.svelte-1b6rbvp .delete-button.svelte-1b6rbvp:hover{background-color:var(--color-bordeaux)}.contact-table.svelte-1b6rbvp tbody tr.svelte-1b6rbvp:nth-child(even){background-color:var(--color-gris-clair)}.grid-view.svelte-1b6rbvp.svelte-1b6rbvp{max-width:var(--tablet);margin:0 auto;padding:20px;text-align:center;overflow:auto;max-height:90vh}.grid-view.svelte-1b6rbvp h1.svelte-1b6rbvp{font-family:var(--font-primary-bold);color:var(--color-rose)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { contacts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="grid-view svelte-1b6rbvp"><h1 class="svelte-1b6rbvp">${escape(contacts.length == 0 ? "Aucune demande de contact" : "Liste des demandes de contacts")}</h1>
   
    <table class="contact-table svelte-1b6rbvp"${add_attribute("style", contacts.length == 0 ? "display:none;" : "", 0)}><thead><tr class="svelte-1b6rbvp"><th class="svelte-1b6rbvp">Nom</th>
                <th class="svelte-1b6rbvp">Prénom</th>
                
                
                <th class="svelte-1b6rbvp">Supprimer</th></tr></thead>
        <tbody>${each(contacts, (contact, index) => {
    return `<tr class="svelte-1b6rbvp"><td class="svelte-1b6rbvp"><a href="${"/admin/contacts/" + escape(contact.id, true)}" class="svelte-1b6rbvp">${escape(contact?.nom ?? "")}</a></td>
                    <td class="svelte-1b6rbvp">${escape(contact?.prenom ?? "")}</td>
                    
                    
                    <td class="svelte-1b6rbvp"><button data-sveltekit-reload class="delete-button svelte-1b6rbvp">Supprimer</button></td>
                </tr>`;
  })}
           
            </tbody></table>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d31f2664.js.map
