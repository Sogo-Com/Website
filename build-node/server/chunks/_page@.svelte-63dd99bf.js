import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each } from './index3-560a1835.js';
import Layout from './_layout.svelte-d752d799.js';
import './index4-0a27471d.js';
import './index2-0087e825.js';

const css = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}.collaborateur-table.svelte-1coj870.svelte-1coj870{width:100%;border-collapse:collapse}.collaborateur-table.svelte-1coj870 th.svelte-1coj870,.collaborateur-table.svelte-1coj870 td.svelte-1coj870{border:1px solid var(--color-gris-clair);padding:10px;text-align:left}.collaborateur-table.svelte-1coj870 th a.svelte-1coj870,.collaborateur-table.svelte-1coj870 td a.svelte-1coj870{color:#000}.collaborateur-table.svelte-1coj870 th a.svelte-1coj870:hover,.collaborateur-table.svelte-1coj870 td a.svelte-1coj870:hover{color:var(--color-rose)}.collaborateur-table.svelte-1coj870 th.svelte-1coj870{background-color:var(--color-jaune);color:var(--color-blanc);font-family:var(--font-secondary-bold)}.collaborateur-table.svelte-1coj870 td.svelte-1coj870{font-family:var(--font-secondary-regular)}.collaborateur-table.svelte-1coj870 .delete-button.svelte-1coj870{background-color:var(--color-rose);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;width:100%;transition:background-color 0.3s ease}.collaborateur-table.svelte-1coj870 .delete-button.svelte-1coj870:hover{background-color:var(--color-bordeaux)}.collaborateur-table.svelte-1coj870 tbody tr.svelte-1coj870:nth-child(even){background-color:var(--color-gris-clair)}.grid-view.svelte-1coj870.svelte-1coj870{max-width:var(--tablet);margin:0 auto;padding:20px;text-align:center;overflow:auto;max-height:90vh}.grid-view.svelte-1coj870 h1.svelte-1coj870{font-family:var(--font-primary-bold);color:var(--color-rose)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { collaborateurs } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    buttons: () => {
      return `<div slot="buttons"><a href="/admin/collaborateur" class="create-button"><span>Créer un collaborateur</span></a></div>`;
    },
    default: () => {
      return `<div class="grid-view svelte-1coj870"><h1 class="svelte-1coj870">${escape(collaborateurs.length == 0 ? "Aucun collaborateur" : "Liste des collaborateurs")}</h1>

		<table class="collaborateur-table svelte-1coj870"${add_attribute("style", collaborateurs.length == 0 ? "display:none;" : "", 0)}><thead><tr class="svelte-1coj870"><th class="svelte-1coj870">Prenom</th>
					<th class="svelte-1coj870">Rang</th>
					<th class="svelte-1coj870">Date de création</th>
					<th class="svelte-1coj870">Supprimer</th></tr></thead>
			<tbody>${each(collaborateurs, (collaborateur, index) => {
        return `<tr class="svelte-1coj870"><td class="svelte-1coj870"><a href="${"/admin/collaborateur/" + escape(collaborateur.id, true)}" class="svelte-1coj870">${escape(collaborateur?.prenom ?? "Aucun prénom")}</a></td>
						<td class="svelte-1coj870">${escape(collaborateur?.rang ?? "Aucun rang")}</td>

						<td class="svelte-1coj870">${escape(new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "short" }).format(collaborateur?.createdAt))}</td>
						<td class="svelte-1coj870"><form action="?/delete" method="POST"><input type="hidden" name="id"${add_attribute("value", collaborateur.id, 0)}>
									<button type="submit" class="delete-button svelte-1coj870">Supprimer</button>
								</form></td>
					</tr>`;
      })}</tbody></table></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page@.svelte-63dd99bf.js.map
