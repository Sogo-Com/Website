import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each } from './index3-560a1835.js';
import Layout from './_layout.svelte-d752d799.js';
import './index4-0a27471d.js';
import './index2-0087e825.js';

const css = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}.projet-table.svelte-qj0nof.svelte-qj0nof{width:100%;border-collapse:collapse}.projet-table.svelte-qj0nof th.svelte-qj0nof,.projet-table.svelte-qj0nof td.svelte-qj0nof{border:1px solid var(--color-gris-clair);padding:10px;text-align:left}.projet-table.svelte-qj0nof th a.svelte-qj0nof,.projet-table.svelte-qj0nof td a.svelte-qj0nof{color:#000}.projet-table.svelte-qj0nof th a.svelte-qj0nof:hover,.projet-table.svelte-qj0nof td a.svelte-qj0nof:hover{color:var(--color-rose)}.projet-table.svelte-qj0nof th.svelte-qj0nof{background-color:var(--color-jaune);color:var(--color-blanc);font-family:var(--font-secondary-bold)}.projet-table.svelte-qj0nof td.svelte-qj0nof{font-family:var(--font-secondary-regular)}.projet-table.svelte-qj0nof .delete-button.svelte-qj0nof{background-color:var(--color-rose);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;width:100%;transition:background-color 0.3s ease}.projet-table.svelte-qj0nof .delete-button.svelte-qj0nof:hover{background-color:var(--color-bordeaux)}.projet-table.svelte-qj0nof tbody tr.svelte-qj0nof:nth-child(even){background-color:var(--color-gris-clair)}.grid-view.svelte-qj0nof.svelte-qj0nof{max-width:var(--tablet);margin:0 auto;padding:20px;text-align:center;overflow:auto;max-height:90vh}.grid-view.svelte-qj0nof h1.svelte-qj0nof{font-family:var(--font-primary-bold);color:var(--color-rose)}',
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
      return `<div slot="buttons"><a href="/admin/projet" class="create-button"><span>Créer un projet</span></a></div>`;
    },
    default: () => {
      return `<div class="grid-view svelte-qj0nof"><h1 class="svelte-qj0nof">${escape(projets.length == 0 ? "Aucun projet" : "Liste des projets")}</h1>

		<table class="projet-table svelte-qj0nof"${add_attribute("style", projets.length == 0 ? "display:none;" : "", 0)}><thead><tr class="svelte-qj0nof"><th class="svelte-qj0nof">Titre</th>
					<th class="svelte-qj0nof">Type</th>
					<th class="svelte-qj0nof">Date de création</th>
					<th class="svelte-qj0nof">Supprimer</th></tr></thead>
			<tbody>${each(projets, (projet, index) => {
        return `<tr class="svelte-qj0nof"><td class="svelte-qj0nof"><a href="${"/admin/projet/" + escape(projet.id, true)}" class="svelte-qj0nof">${escape(projet?.titre ?? "Aucun titre")}</a></td>
						<td class="svelte-qj0nof">${escape(projet?.typeProjet ?? "Aucun type")}</td>

						<td class="svelte-qj0nof">${escape(new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "long" }).format(projet?.createdAt))}</td>
						<td class="svelte-qj0nof"><form action="?/delete" method="POST"><input type="hidden" name="id"${add_attribute("value", projet.id, 0)}>
									<button type="submit" class="delete-button svelte-qj0nof">Supprimer</button>
								</form></td>
					</tr>`;
      })}</tbody></table></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page@.svelte-83013983.js.map
