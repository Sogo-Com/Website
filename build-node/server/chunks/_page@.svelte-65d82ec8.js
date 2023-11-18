import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each } from './ssr-28b17f7a.js';
import Layout from './_layout.svelte-8d080781.js';
import './index3-519bc178.js';
import './index2-0087e825.js';

const css = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:360px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 360px){:root{font-size:10px}}.projet-table.svelte-qsj673.svelte-qsj673{width:100%;border-collapse:collapse}.projet-table.svelte-qsj673 th.svelte-qsj673,.projet-table.svelte-qsj673 td.svelte-qsj673{border:1px solid var(--color-gris-clair);padding:10px;text-align:left}.projet-table.svelte-qsj673 th a.svelte-qsj673,.projet-table.svelte-qsj673 td a.svelte-qsj673{color:#000}.projet-table.svelte-qsj673 th a.svelte-qsj673:hover,.projet-table.svelte-qsj673 td a.svelte-qsj673:hover{color:var(--color-rose)}.projet-table.svelte-qsj673 th.svelte-qsj673{background-color:var(--color-jaune);color:var(--color-blanc);font-family:var(--font-secondary-bold)}.projet-table.svelte-qsj673 td.svelte-qsj673{font-family:var(--font-secondary-regular)}.projet-table.svelte-qsj673 .delete-button.svelte-qsj673{background-color:var(--color-rose);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;width:100%;transition:background-color 0.3s ease}.projet-table.svelte-qsj673 .delete-button.svelte-qsj673:hover{background-color:var(--color-bordeaux)}.projet-table.svelte-qsj673 tbody tr.svelte-qsj673:nth-child(even){background-color:var(--color-gris-clair)}.grid-view.svelte-qsj673.svelte-qsj673{max-width:var(--tablet);margin:0 auto;padding:20px;text-align:center;overflow:auto;max-height:90vh}.grid-view.svelte-qsj673 h1.svelte-qsj673{font-family:var(--font-primary-bold);color:var(--color-rose)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { projets } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    buttons: () => {
      return `<div slot="buttons" data-svelte-h="svelte-j06ey"><a href="/admin/projet" class="create-button"><span>Créer un projet</span></a></div>`;
    },
    default: () => {
      return `<div class="grid-view svelte-qsj673"><h1 class="svelte-qsj673">${escape(projets.length == 0 ? "Aucun projet" : "Liste des projets")}</h1> <table class="projet-table svelte-qsj673"${add_attribute("style", projets.length == 0 ? "display:none;" : "", 0)}><thead data-svelte-h="svelte-hb2qvl"><tr class="svelte-qsj673"><th class="svelte-qsj673">Titre</th> <th class="svelte-qsj673">Type</th> <th class="svelte-qsj673">Date de création</th> <th class="svelte-qsj673">Supprimer</th></tr></thead> <tbody>${each(projets, (projet, index) => {
        return `<tr class="svelte-qsj673"><td class="svelte-qsj673"><a href="${"/admin/projet/" + escape(projet.id, true)}" class="svelte-qsj673">${escape(projet?.titre ?? "Aucun titre")}</a></td> <td class="svelte-qsj673">${escape(projet?.typeProjet ?? "Aucun type")}</td> <td class="svelte-qsj673">${escape(new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "long" }).format(projet?.createdAt))}</td> <td class="svelte-qsj673"><form action="?/delete" method="POST"><input type="hidden" name="id"${add_attribute("value", projet.id, 0)}> <button type="submit" class="delete-button svelte-qsj673" data-svelte-h="svelte-8j7lff">Supprimer</button> </form></td> </tr>`;
      })}</tbody></table></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page@.svelte-65d82ec8.js.map
