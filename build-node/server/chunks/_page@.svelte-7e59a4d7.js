import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, h as each } from './index3-cf31b2df.js';
import Layout from './_layout.svelte-31a70131.js';
import './index-0087e825.js';

const css = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}.actualite-table.svelte-sw1s8r.svelte-sw1s8r{width:100%;border-collapse:collapse}.actualite-table.svelte-sw1s8r th.svelte-sw1s8r,.actualite-table.svelte-sw1s8r td.svelte-sw1s8r{border:1px solid var(--color-gris-clair);padding:10px;text-align:left}.actualite-table.svelte-sw1s8r th a.svelte-sw1s8r,.actualite-table.svelte-sw1s8r td a.svelte-sw1s8r{color:#000}.actualite-table.svelte-sw1s8r th a.svelte-sw1s8r:hover,.actualite-table.svelte-sw1s8r td a.svelte-sw1s8r:hover{color:var(--color-rose)}.actualite-table.svelte-sw1s8r th.svelte-sw1s8r{background-color:var(--color-jaune);color:var(--color-blanc);font-family:var(--font-secondary-bold)}.actualite-table.svelte-sw1s8r td.svelte-sw1s8r{font-family:var(--font-secondary-regular)}.actualite-table.svelte-sw1s8r .delete-button.svelte-sw1s8r{background-color:var(--color-rose);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;width:100%;transition:background-color 0.3s ease}.actualite-table.svelte-sw1s8r .delete-button.svelte-sw1s8r:hover{background-color:var(--color-bordeaux)}.actualite-table.svelte-sw1s8r tbody tr.svelte-sw1s8r:nth-child(even){background-color:var(--color-gris-clair)}.grid-view.svelte-sw1s8r.svelte-sw1s8r{max-width:var(--tablet);margin:0 auto;padding:20px;text-align:center;overflow:auto;max-height:90vh}.grid-view.svelte-sw1s8r h1.svelte-sw1s8r{font-family:var(--font-primary-bold);color:var(--color-rose)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { actualites } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    buttons: () => {
      return `<div slot="buttons"><a href="/admin/actualite" class="create-button"><span>Créer une actualite</span></a></div>`;
    },
    default: () => {
      return `<div class="grid-view svelte-sw1s8r"><h1 class="svelte-sw1s8r">${escape(actualites.length == 0 ? "Aucune actualité" : "Liste des actualites")}</h1>

		<table class="actualite-table svelte-sw1s8r"${add_attribute("style", actualites.length == 0 ? "display:none;" : "", 0)}><thead><tr class="svelte-sw1s8r"><th class="svelte-sw1s8r">Titre</th>
					<th class="svelte-sw1s8r">Redacteur</th>
					<th class="svelte-sw1s8r">Date de création</th>
					<th class="svelte-sw1s8r">Supprimer</th></tr></thead>
			<tbody>${each(actualites, (actualite, index) => {
        return `<tr class="svelte-sw1s8r"><td class="svelte-sw1s8r"><a href="${"/admin/actualite/" + escape(actualite.id, true)}" class="svelte-sw1s8r">${escape(actualite?.titre ?? "Aucun titre")}</a></td>
						<td class="svelte-sw1s8r">${escape(actualite?.redacteur ?? "Aucun rédacteur")}</td>

						<td class="svelte-sw1s8r">${escape(new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "long" }).format(actualite?.createdAt))}</td>
						<td class="svelte-sw1s8r"><button data-sveltekit-reload class="delete-button svelte-sw1s8r">Supprimer</button></td>
					</tr>`;
      })}</tbody></table></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page@.svelte-7e59a4d7.js.map
