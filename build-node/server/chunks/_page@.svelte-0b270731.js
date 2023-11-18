import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from './ssr-28b17f7a.js';
import Layout from './_layout.svelte-8d080781.js';
import { W as Writer } from './Writer-ce799c2a.js';
import './index3-519bc178.js';
import './index2-0087e825.js';
import '@editorjs/editorjs';
import '@editorjs/header';
import '@editorjs/nested-list';
import '@editorjs/image';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:360px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 360px){:root{font-size:10px}}.projet-form.svelte-mj8ri0.svelte-mj8ri0{margin:0px 20px;padding:20px;background-color:var(--color-blanc);border:1px solid var(--color-gris-clair)}.projet-form.svelte-mj8ri0 .form-group.svelte-mj8ri0{margin-bottom:20px}.projet-form.svelte-mj8ri0 .form-group img.svelte-mj8ri0{margin-top:20px;width:100%;height:auto;object-fit:cover;max-height:300px}.projet-form.svelte-mj8ri0 .form-group label.svelte-mj8ri0{font-family:var(--font-secondary-medium);color:var(--color-gris-dark);margin-bottom:5px;display:block}.projet-form.svelte-mj8ri0 .form-group input[type=text].svelte-mj8ri0,.projet-form.svelte-mj8ri0 .form-group textarea.svelte-mj8ri0,.projet-form.svelte-mj8ri0 .form-group select.svelte-mj8ri0,.projet-form.svelte-mj8ri0 .form-group .contenu.svelte-mj8ri0{width:100%;padding:10px;border:1px solid var(--color-gris-clair);font-family:var(--font-secondary-regular);background:white}.projet-form.svelte-mj8ri0 .submit-button.svelte-mj8ri0{background-color:var(--color-jaune);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease}.projet-form.svelte-mj8ri0 .submit-button.svelte-mj8ri0:hover{background-color:var(--color-bordeaux)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { projet } = data;
  let writerMethods;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
      buttons: () => {
        return `<div slot="buttons"><button class="back-button" data-svelte-h="svelte-9watk3">Retour aux projets</button> ${projet.id != null && projet.id.length != 0 ? `<form action="?/delete" method="POST"><input type="hidden" name="id"${add_attribute("value", projet.id, 0)}> <button type="submit" class="delete-button" data-svelte-h="svelte-8j7lff">Supprimer</button></form>` : ``}</div>`;
      },
      default: () => {
        return `<div><h1 data-svelte-h="svelte-1xkiu0f">Formulaire de Projet</h1> <form method="POST" action="?/create" class="projet-form svelte-mj8ri0"><div class="form-group svelte-mj8ri0"><label for="titre" class="svelte-mj8ri0" data-svelte-h="svelte-1nxve0y">Titre</label> <input id="titre" name="titre" contenteditable="true" type="text" class="svelte-mj8ri0"${add_attribute("value", projet.titre, 0)}></div> <div class="form-group svelte-mj8ri0"><label for="typeProjet" class="svelte-mj8ri0" data-svelte-h="svelte-1uknwo7">Type de projet</label> <select id="typeProjet"${add_attribute("value", projet.typeProjet ?? "", 0)} name="typeProjet" required class="svelte-mj8ri0"><option value="" selected disabled hidden data-svelte-h="svelte-4yr5ek">Choisissez un type...</option><option value="redaction" data-svelte-h="svelte-g2yq9s">Rédaction</option><option value="presse" data-svelte-h="svelte-xweycu">Presse</option><option value="graphisme" data-svelte-h="svelte-8mz1m6">Graphisme</option><option value="reseaux" data-svelte-h="svelte-vnrius">Réseaux</option><option value="photos" data-svelte-h="svelte-j57foi">Photos</option><option value="evenements" data-svelte-h="svelte-1g7cd5a">Evenements</option></select></div> <div class="form-group svelte-mj8ri0"><label for="file" class="svelte-mj8ri0" data-svelte-h="svelte-1635997">Image</label> <input type="file" id="file" name="photoFile"${add_attribute("accept", [".jpg", ".jpeg", ".png", ".webp"].join(","), 0)}> ${projet.photo != null && projet.photo.length != 0 ? `<img${add_attribute("src", projet.photo, 0)}${add_attribute("alt", projet.titre, 0)} class="svelte-mj8ri0">` : ``}</div> <div class="form-group svelte-mj8ri0"><label for="fileLogo" class="svelte-mj8ri0" data-svelte-h="svelte-byj41n">Image Logo</label> <input type="file" id="fileLogo" name="photoLogoFile"${add_attribute("accept", [".jpg", ".jpeg", ".png", ".webp"].join(","), 0)}> ${projet.photoLogo != null && projet.photoLogo.length != 0 ? `<img${add_attribute("src", projet.photoLogo, 0)}${add_attribute("alt", projet.titre, 0)} class="svelte-mj8ri0">` : ``}</div> <div class="form-group svelte-mj8ri0"><label for="descriptionCourte" class="svelte-mj8ri0" data-svelte-h="svelte-ljvxfq">Description courte (200 caracteres max)</label> <textarea id="descriptionCourte" rows="3" cols="45" maxlength="200" name="descriptionCourte" contenteditable="true" type="text" class="svelte-mj8ri0">${escape(projet.descriptionCourte || "")}</textarea></div> <div class="form-group svelte-mj8ri0"><label for="contenu" class="svelte-mj8ri0" data-svelte-h="svelte-1grqde2">Contenu</label> <div id="contenu" class="contenu svelte-mj8ri0" name="contenu" required>${validate_component(Writer, "Writer").$$render(
          $$result,
          {
            contenu: projet.contenu,
            methods: writerMethods
          },
          {
            methods: ($$value) => {
              writerMethods = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <button type="submit" for="envoyer" value="envoyer" class="submit-button svelte-mj8ri0" data-svelte-h="svelte-19xtx1b">Enregistrer</button></form></div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page@.svelte-0b270731.js.map
