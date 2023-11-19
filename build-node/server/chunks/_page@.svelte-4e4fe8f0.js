import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each } from './index3-560a1835.js';
import Layout from './_layout.svelte-d752d799.js';
import './index4-0a27471d.js';
import './index2-0087e825.js';

const css = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}.actualite-table.svelte-1dr6yuz.svelte-1dr6yuz{width:100%;border-collapse:collapse}.actualite-table.svelte-1dr6yuz th.svelte-1dr6yuz,.actualite-table.svelte-1dr6yuz td.svelte-1dr6yuz{border:1px solid var(--color-gris-clair);padding:10px;text-align:left}.actualite-table.svelte-1dr6yuz th a.svelte-1dr6yuz,.actualite-table.svelte-1dr6yuz td a.svelte-1dr6yuz{color:#000}.actualite-table.svelte-1dr6yuz th a.svelte-1dr6yuz:hover,.actualite-table.svelte-1dr6yuz td a.svelte-1dr6yuz:hover{color:var(--color-rose)}.actualite-table.svelte-1dr6yuz th.svelte-1dr6yuz{background-color:var(--color-jaune);color:var(--color-blanc);font-family:var(--font-secondary-bold)}.actualite-table.svelte-1dr6yuz td.svelte-1dr6yuz{font-family:var(--font-secondary-regular)}.actualite-table.svelte-1dr6yuz .delete-button.svelte-1dr6yuz{background-color:var(--color-rose);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;width:100%;transition:background-color 0.3s ease}.actualite-table.svelte-1dr6yuz .delete-button.svelte-1dr6yuz:hover{background-color:var(--color-bordeaux)}.actualite-table.svelte-1dr6yuz tbody tr.svelte-1dr6yuz:nth-child(even){background-color:var(--color-gris-clair)}.grid-view.svelte-1dr6yuz.svelte-1dr6yuz{max-width:var(--tablet);margin:0 auto;padding:20px;text-align:center;overflow:auto;max-height:90vh}.grid-view.svelte-1dr6yuz h1.svelte-1dr6yuz{font-family:var(--font-primary-bold);color:var(--color-rose)}',
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
      return `<div class="grid-view svelte-1dr6yuz"><h1 class="svelte-1dr6yuz">${escape(actualites.length == 0 ? "Aucune actualité" : "Liste des actualites")}</h1>

		<table class="actualite-table svelte-1dr6yuz"${add_attribute("style", actualites.length == 0 ? "display:none;" : "", 0)}><thead><tr class="svelte-1dr6yuz"><th class="svelte-1dr6yuz">Titre</th>
					<th class="svelte-1dr6yuz">Redacteur</th>
					<th class="svelte-1dr6yuz">Date de création</th>
					<th class="svelte-1dr6yuz">Supprimer</th></tr></thead>
			<tbody>${each(actualites, (actualite, index) => {
        return `<tr class="svelte-1dr6yuz"><td class="svelte-1dr6yuz"><a href="${"/admin/actualite/" + escape(actualite.id, true)}" class="svelte-1dr6yuz">${escape(actualite?.titre ?? "Aucun titre")}</a></td>
						<td class="svelte-1dr6yuz">${escape(actualite?.redacteur ?? "Aucun rédacteur")}</td>

						<td class="svelte-1dr6yuz">${escape(new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "long" }).format(actualite?.createdAt))}</td>
						<td class="svelte-1dr6yuz"><form action="?/delete" method="POST"><input type="hidden" name="id"${add_attribute("value", actualite.id, 0)}>
									<button type="submit" class="delete-button svelte-1dr6yuz">Supprimer</button>
								</form></td>
					</tr>`;
      })}</tbody></table></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page@.svelte-4e4fe8f0.js.map
