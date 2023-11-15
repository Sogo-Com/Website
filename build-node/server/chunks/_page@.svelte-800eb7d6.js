import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from './ssr-4049a6a7.js';
import Layout from './_layout.svelte-24fa0340.js';
import { W as Writer } from './Writer-0c2fd583.js';
import './index2-d174f90b.js';
import './index-0087e825.js';
import '@editorjs/editorjs';
import '@editorjs/header';
import '@editorjs/nested-list';
import '@editorjs/image';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}.actualite-form.svelte-dxsg85.svelte-dxsg85{margin:0px 20px;padding:20px;background-color:var(--color-blanc);border:1px solid var(--color-gris-clair)}.actualite-form.svelte-dxsg85 .form-group.svelte-dxsg85{margin-bottom:20px}.actualite-form.svelte-dxsg85 .form-group img.svelte-dxsg85{margin-top:20px;width:100%;height:auto;object-fit:cover;max-height:300px}.actualite-form.svelte-dxsg85 .form-group label.svelte-dxsg85{font-family:var(--font-secondary-medium);color:var(--color-gris-dark);margin-bottom:5px;display:block}.actualite-form.svelte-dxsg85 .form-group input[type=text].svelte-dxsg85,.actualite-form.svelte-dxsg85 .form-group input[type=number].svelte-dxsg85,.actualite-form.svelte-dxsg85 .form-group textarea.svelte-dxsg85,.actualite-form.svelte-dxsg85 .form-group .contenu.svelte-dxsg85{width:100%;padding:10px;border:1px solid var(--color-gris-clair);font-family:var(--font-secondary-regular);background:white}.actualite-form.svelte-dxsg85 .submit-button.svelte-dxsg85{background-color:var(--color-jaune);color:var(--color-blanc);padding:10px 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease}.actualite-form.svelte-dxsg85 .submit-button.svelte-dxsg85:hover{background-color:var(--color-bordeaux)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { actualite } = data;
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
        return `<div slot="buttons"><button class="back-button" data-svelte-h="svelte-j8g8wl">Retour aux actualites</button> ${actualite.id != null && actualite.id.length != 0 ? `<form action="?/delete" method="POST"><input type="hidden" name="id"${add_attribute("value", actualite.id, 0)}> <button type="submit" class="delete-button" data-svelte-h="svelte-8j7lff">Supprimer</button></form>` : ``}</div>`;
      },
      default: () => {
        return `<div><h1 data-svelte-h="svelte-16tkpwx">Formulaire d&#39;Actualité</h1> <form method="POST" action="?/create" class="actualite-form svelte-dxsg85"><div class="form-group svelte-dxsg85"><label for="titre" class="svelte-dxsg85" data-svelte-h="svelte-1nxve0y">Titre</label> <input id="titre" name="titre" contenteditable="true" type="text" class="svelte-dxsg85"${add_attribute("value", actualite.titre, 0)}></div> <div class="form-group svelte-dxsg85"><label for="file" class="svelte-dxsg85" data-svelte-h="svelte-1635997">Image</label> <input type="file" id="file" name="photoFile"${add_attribute("accept", [".jpg", ".jpeg", ".png", ".webp"].join(","), 0)}> ${actualite.photo != null && actualite.photo.length != 0 ? `<img${add_attribute("src", actualite.photo, 0)}${add_attribute("alt", actualite.titre, 0)} class="svelte-dxsg85">` : ``}</div> <div class="form-group svelte-dxsg85"><label for="redacteur" class="svelte-dxsg85" data-svelte-h="svelte-1he7ihw">Rédacteur</label> <input id="redacteur" name="redacteur" contenteditable="true" type="text" class="svelte-dxsg85"${add_attribute("value", actualite.redacteur, 0)}></div> <div class="form-group svelte-dxsg85"><label for="tempsLecture" class="svelte-dxsg85" data-svelte-h="svelte-1veys5u">Temps de Lecture (en minutes)</label> <input id="tempsLecture" name="tempsLecture" contenteditable="true" type="number" class="svelte-dxsg85"${add_attribute("value", actualite.tempsLecture, 0)}></div> <div class="form-group svelte-dxsg85"><label for="descriptionCourte" class="svelte-dxsg85" data-svelte-h="svelte-ljvxfq">Description courte (200 caracteres max)</label> <textarea id="descriptionCourte" rows="3" cols="45" maxlength="200" name="descriptionCourte" contenteditable="true" type="text" class="svelte-dxsg85">${escape(actualite.descriptionCourte || "")}</textarea></div> <div class="form-group svelte-dxsg85"><label for="contenu" class="svelte-dxsg85" data-svelte-h="svelte-1grqde2">Contenu</label> <div id="contenu" class="contenu svelte-dxsg85" name="contenu" required>${validate_component(Writer, "Writer").$$render(
          $$result,
          {
            contenu: actualite.contenu,
            methods: writerMethods
          },
          {
            methods: ($$value) => {
              writerMethods = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> <button type="submit" for="envoyer" value="envoyer" class="submit-button svelte-dxsg85" data-svelte-h="svelte-19xtx1b">Enregistrer</button></form></div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page@.svelte-800eb7d6.js.map
