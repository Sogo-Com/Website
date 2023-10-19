import { c as create_ssr_component, e as escape } from './index3-ec5c8fd3.js';
import './index5-2fb00356.js';
import './index2-8abc0c01.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}.sticky-bar.svelte-xv9xyz.svelte-xv9xyz{position:sticky;top:0;background-color:var(--color-jaune);padding:10px 0;text-align:right;z-index:1}.sticky-bar.svelte-xv9xyz .delete-button.svelte-xv9xyz{background-color:var(--color-rose);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease}.sticky-bar.svelte-xv9xyz .delete-button.svelte-xv9xyz:hover{background-color:var(--color-bordeaux)}.contact-details.svelte-xv9xyz.svelte-xv9xyz{max-width:var(--tablet);margin:0 auto;padding:20px;text-align:center}.contact-details.svelte-xv9xyz h1.svelte-xv9xyz{font-family:var(--font-primary-bold);color:var(--color-rose)}.contact-details.svelte-xv9xyz .details ul.svelte-xv9xyz{list-style:none;padding:0}.contact-details.svelte-xv9xyz .details ul li.svelte-xv9xyz{font-family:var(--font-secondary-regular);color:var(--color-gris-dark);font-size:18px;margin-bottom:10px}.contact-details.svelte-xv9xyz .details ul li strong.svelte-xv9xyz{font-weight:bold}.contact-details.svelte-xv9xyz .details ul li a.svelte-xv9xyz{color:var(--color-bleu);text-decoration:none;transition:color 0.3s ease}.contact-details.svelte-xv9xyz .details ul li a.svelte-xv9xyz:hover{color:var(--color-kaki)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { contact } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="sticky-bar svelte-xv9xyz"><button class="delete-button svelte-xv9xyz">Supprimer</button></div>

<div class="contact-details svelte-xv9xyz"><h1 class="svelte-xv9xyz">Detail de la Demande de Contact</h1>
  <div class="details"><ul class="svelte-xv9xyz"><li class="svelte-xv9xyz"><strong class="svelte-xv9xyz">Nom:</strong> ${escape(contact.nom)}</li><li class="svelte-xv9xyz"></li><li class="svelte-xv9xyz"><strong class="svelte-xv9xyz">Prénom:</strong> ${escape(contact?.prenom ?? "Aucun prénom")}</li>
          <li class="svelte-xv9xyz"><strong class="svelte-xv9xyz">Email:</strong> <a href="${"mailto:" + escape(contact?.email ?? "", true)}" class="svelte-xv9xyz">${escape(contact?.email ?? "Aucun email")}</a></li>
          <li class="svelte-xv9xyz"><strong class="svelte-xv9xyz">Téléphone:</strong> <a href="${"tel:" + escape(contact?.telephone ?? "", true)}" class="svelte-xv9xyz">${escape(contact?.telephone ?? "")}</a></li>
          <li class="svelte-xv9xyz"><strong class="svelte-xv9xyz">Société:</strong>${escape(contact?.societe ?? "Aucune société")}</li>
          <li class="svelte-xv9xyz"><strong class="svelte-xv9xyz">Créé le:</strong> ${escape(new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "long" }).format(contact?.createdAt))}</li></ul></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-10a2512d.js.map
