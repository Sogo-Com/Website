import { c as create_ssr_component, e as escape, b as add_attribute, d as each } from './index3-7ceb3c84.js';

const css = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}.contact-table.svelte-cvqksl.svelte-cvqksl{width:100%;border-collapse:collapse}.contact-table.svelte-cvqksl th.svelte-cvqksl,.contact-table.svelte-cvqksl td.svelte-cvqksl{border:1px solid var(--color-gris-clair);padding:10px;text-align:left}.contact-table.svelte-cvqksl th a.svelte-cvqksl,.contact-table.svelte-cvqksl td a.svelte-cvqksl{color:#000}.contact-table.svelte-cvqksl th a.svelte-cvqksl:hover,.contact-table.svelte-cvqksl td a.svelte-cvqksl:hover{color:var(--color-rose)}.contact-table.svelte-cvqksl th.svelte-cvqksl{background-color:var(--color-jaune);color:var(--color-blanc);font-family:var(--font-secondary-bold)}.contact-table.svelte-cvqksl td.svelte-cvqksl{font-family:var(--font-secondary-regular)}.contact-table.svelte-cvqksl .delete-button.svelte-cvqksl{background-color:var(--color-rose);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;width:100%;transition:background-color 0.3s ease}.contact-table.svelte-cvqksl .delete-button.svelte-cvqksl:hover{background-color:var(--color-bordeaux)}.contact-table.svelte-cvqksl tbody tr.svelte-cvqksl:nth-child(even){background-color:var(--color-gris-clair)}.grid-view.svelte-cvqksl.svelte-cvqksl{max-width:var(--tablet);margin:0 auto;padding:20px;text-align:center;overflow:auto;max-height:90vh}.grid-view.svelte-cvqksl h1.svelte-cvqksl{font-family:var(--font-primary-bold);color:var(--color-rose)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { contacts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="grid-view svelte-cvqksl"><h1 class="svelte-cvqksl">${escape(contacts.length == 0 ? "Aucune demande de contact" : "Liste des demandes de contacts")}</h1>
   
    <table class="contact-table svelte-cvqksl"${add_attribute("style", contacts.length == 0 ? "display:none;" : "", 0)}><thead><tr class="svelte-cvqksl"><th class="svelte-cvqksl">Nom</th>
                <th class="svelte-cvqksl">Prénom</th>
                
                
                <th class="svelte-cvqksl">Supprimer</th></tr></thead>
        <tbody>${each(contacts, (contact, index) => {
    return `<tr class="svelte-cvqksl"><td class="svelte-cvqksl"><a href="${"/admin/contacts/" + escape(contact.id, true)}" class="svelte-cvqksl">${escape(contact?.nom ?? "")}</a></td>
                    <td class="svelte-cvqksl">${escape(contact?.prenom ?? "")}</td>
                    
                    
                    <td class="svelte-cvqksl"><button data-sveltekit-reload class="delete-button svelte-cvqksl">Supprimer</button></td>
                </tr>`;
  })}
           
            </tbody></table>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-43ffb4aa.js.map
