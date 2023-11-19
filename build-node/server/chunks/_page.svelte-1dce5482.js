import { c as create_ssr_component, b as add_attribute, d as each, v as validate_component, e as escape } from './index3-560a1835.js';

const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}.sub-project.svelte-1kra5tj.svelte-1kra5tj{width:100%;padding:64px 11%;height:fit-content;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-evenly;align-items:center}.sub-project.blanc.svelte-1kra5tj.svelte-1kra5tj{background-color:#fff}@media only screen and (max-width: 960px){.sub-project.blanc.svelte-1kra5tj .contenu.svelte-1kra5tj{align-items:start;text-align:start}}.sub-project.bleu.svelte-1kra5tj.svelte-1kra5tj{background-color:rgba(44, 154, 155, 0.1)}@media only screen and (max-width: 960px){.sub-project.bleu.svelte-1kra5tj .contenu.svelte-1kra5tj{align-items:end;text-align:end}}@media only screen and (max-width: 960px){.sub-project.svelte-1kra5tj.svelte-1kra5tj{flex-direction:column;padding:32px 12px}}.sub-project.svelte-1kra5tj .contenu.svelte-1kra5tj{max-width:40vw;padding:32px}@media only screen and (max-width: 960px){.sub-project.svelte-1kra5tj .contenu.svelte-1kra5tj{max-width:unset;padding:0px;display:flex;flex-direction:column;justify-content:center;align-items:center}}.sub-project.svelte-1kra5tj .contenu h3.svelte-1kra5tj{position:relative;z-index:1;width:fit-content}@media only screen and (max-width: 960px){.sub-project.svelte-1kra5tj .contenu h3.svelte-1kra5tj{margin-bottom:16px}}.sub-project.svelte-1kra5tj .contenu h3.svelte-1kra5tj:before{background-color:rgba(44, 154, 155, 0.1);display:block;position:absolute;left:-15%;z-index:-1;bottom:15%;border-radius:50px;content:"";width:50px;height:50px}@media only screen and (max-width: 960px){.sub-project.svelte-1kra5tj .contenu h3.svelte-1kra5tj:before{display:none}}.sub-project.svelte-1kra5tj .contenu h3.svelte-1kra5tj:after{background-color:rgba(44, 154, 155, 0.1);display:block;position:absolute;border-radius:50px;top:15%;left:85%;content:"";z-index:-1;width:50px;height:50px}@media only screen and (max-width: 960px){.sub-project.svelte-1kra5tj .contenu h3.svelte-1kra5tj:after{display:none}}.sub-project.svelte-1kra5tj .contenu .texte.svelte-1kra5tj{padding:0 0 32px 0;font-family:"Poppins-Light"}@media only screen and (max-width: 960px){.sub-project.svelte-1kra5tj .contenu .texte.svelte-1kra5tj{padding:0}}.sub-project.svelte-1kra5tj .contenu .btn.svelte-1kra5tj{background-color:#2C9A9B}@media only screen and (max-width: 960px){.sub-project.svelte-1kra5tj .contenu .btn.svelte-1kra5tj{margin-top:16px}}.sub-project.svelte-1kra5tj .trait.svelte-1kra5tj{width:2px;height:300px;background-color:#575757;margin:0 32px}@media only screen and (max-width: 960px){.sub-project.svelte-1kra5tj .trait.svelte-1kra5tj{display:none}}.sub-project.svelte-1kra5tj .images.svelte-1kra5tj{flex-basis:15%}@media only screen and (max-width: 960px){.sub-project.svelte-1kra5tj .images.svelte-1kra5tj{display:none}}.sub-project.svelte-1kra5tj .images img.svelte-1kra5tj{width:100%;height:100%;object-fit:cover;background-size:cover}.sub-project.svelte-1kra5tj .images.big.svelte-1kra5tj{flex-basis:25%}.sub-project.redaction.right.svelte-1kra5tj.svelte-1kra5tj{background-color:rgba(229, 174, 30, 0.1)}.sub-project.redaction.svelte-1kra5tj .btn.svelte-1kra5tj{background:#e5ae1e}.sub-project.redaction.svelte-1kra5tj h3.svelte-1kra5tj:before{background-color:rgba(229, 174, 30, 0.1)}.sub-project.redaction.svelte-1kra5tj h3.svelte-1kra5tj:after{background-color:rgba(229, 174, 30, 0.1)}.sub-project.presse.right.svelte-1kra5tj.svelte-1kra5tj{background-color:rgba(229, 174, 30, 0.1)}.sub-project.presse.svelte-1kra5tj .btn.svelte-1kra5tj{background:#e5ae1e}.sub-project.presse.svelte-1kra5tj h3.svelte-1kra5tj:before{background-color:rgba(229, 174, 30, 0.1)}.sub-project.presse.svelte-1kra5tj h3.svelte-1kra5tj:after{background-color:rgba(229, 174, 30, 0.1)}.sub-project.graphisme.right.svelte-1kra5tj.svelte-1kra5tj{background-color:rgba(164, 139, 173, 0.1)}.sub-project.graphisme.svelte-1kra5tj .btn.svelte-1kra5tj{background:#a48bad !important}.sub-project.graphisme.svelte-1kra5tj h3.svelte-1kra5tj:before{background-color:rgba(164, 139, 173, 0.1)}.sub-project.graphisme.svelte-1kra5tj h3.svelte-1kra5tj:after{background-color:rgba(164, 139, 173, 0.1)}.sub-project.reseaux.right.svelte-1kra5tj.svelte-1kra5tj{background-color:rgba(44, 154, 155, 0.1)}.sub-project.reseaux.svelte-1kra5tj .btn.svelte-1kra5tj{background:#2c9a9b}.sub-project.reseaux.svelte-1kra5tj h3.svelte-1kra5tj:before{background-color:rgba(44, 154, 155, 0.1)}.sub-project.reseaux.svelte-1kra5tj h3.svelte-1kra5tj:after{background-color:rgba(44, 154, 155, 0.1)}.sub-project.photos.right.svelte-1kra5tj.svelte-1kra5tj{background-color:rgba(152, 154, 111, 0.1)}.sub-project.photos.svelte-1kra5tj .btn.svelte-1kra5tj{background:#989a6f}.sub-project.photos.svelte-1kra5tj h3.svelte-1kra5tj:before{background-color:rgba(152, 154, 111, 0.1)}.sub-project.photos.svelte-1kra5tj h3.svelte-1kra5tj:after{background-color:rgba(152, 154, 111, 0.1)}.sub-project.evenements.right.svelte-1kra5tj.svelte-1kra5tj{background-color:rgba(157, 82, 79, 0.1)}.sub-project.evenements.svelte-1kra5tj .btn.svelte-1kra5tj{background:#9d524f}.sub-project.evenements.svelte-1kra5tj h3.svelte-1kra5tj:before{background-color:rgba(157, 82, 79, 0.1)}.sub-project.evenements.svelte-1kra5tj h3.svelte-1kra5tj:after{background-color:rgba(157, 82, 79, 0.1)}',
  map: null
};
const ProjetRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { customClass = "" } = $$props;
  let { isLeft = "true" } = $$props;
  let { imgLeft } = $$props;
  let { imgRight } = $$props;
  let { link } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  isLeft = isLeft.toString();
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0)
    $$bindings.customClass(customClass);
  if ($$props.isLeft === void 0 && $$bindings.isLeft && isLeft !== void 0)
    $$bindings.isLeft(isLeft);
  if ($$props.imgLeft === void 0 && $$bindings.imgLeft && imgLeft !== void 0)
    $$bindings.imgLeft(imgLeft);
  if ($$props.imgRight === void 0 && $$bindings.imgRight && imgRight !== void 0)
    $$bindings.imgRight(imgRight);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$1);
  return `<div class="${"sub-project " + escape(customClass, true) + " " + escape(isLeft == "true" ? "left" : "right", true) + " svelte-1kra5tj"}"><div class="${"images " + escape(isLeft == "false" ? "big" : "", true) + " svelte-1kra5tj"}"><img${add_attribute("src", imgLeft, 0)} alt="tomme" class="svelte-1kra5tj"></div>

	${isLeft == "true" ? `<div class="trait svelte-1kra5tj"></div>` : ``}

	<div class="contenu svelte-1kra5tj"><h3 class="svelte-1kra5tj">${escape(title)}</h3>
		<div class="texte svelte-1kra5tj">${escape(description)}</div>
		<div class="btn bleu svelte-1kra5tj">En savoir +</div></div>

	${isLeft == "false" ? `<div class="trait svelte-1kra5tj"></div>` : ``}

	<div class="${"images " + escape(isLeft == "true" ? "big" : "", true) + " svelte-1kra5tj"}"><img${add_attribute("src", imgRight, 0)} alt="tomme" class="svelte-1kra5tj"></div>
</div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}#top.svelte-4o9oa.svelte-4o9oa{height:100vh;position:relative;display:flex}@media only screen and (max-width: 960px){#top.svelte-4o9oa.svelte-4o9oa{height:50vh;align-items:end}}#top.svelte-4o9oa h1.svelte-4o9oa{color:#fff;text-align:left;padding:256px 11%;z-index:15;position:relative}@media only screen and (max-width: 960px){#top.svelte-4o9oa h1.svelte-4o9oa{padding:64px 8px;width:100%;text-align:center}}#top.svelte-4o9oa img.svelte-4o9oa{width:100%;height:100%;position:absolute;top:0;z-index:10;background-size:cover;object-fit:cover}.gris.svelte-4o9oa.svelte-4o9oa{display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:#E1E1E1}@media only screen and (max-width: 960px){.gris.svelte-4o9oa.svelte-4o9oa{flex-direction:column;margin:0;padding:32px 12px}}.gris.svelte-4o9oa .gris-child.svelte-4o9oa{flex-basis:50%}@media only screen and (max-width: 960px){.gris.svelte-4o9oa .gris-child.svelte-4o9oa{flex-basis:100%;width:100%}}.gris.svelte-4o9oa .question.svelte-4o9oa{padding:128px 64px 128px 11%}@media only screen and (max-width: 960px){.gris.svelte-4o9oa .question.svelte-4o9oa{flex-direction:column;padding:0;text-align:center}}.gris.svelte-4o9oa .question h2.svelte-4o9oa{color:#575757}.gris.svelte-4o9oa .reponse.svelte-4o9oa{padding:128px 11% 128px 64px}@media only screen and (max-width: 960px){.gris.svelte-4o9oa .reponse.svelte-4o9oa{flex-direction:column;padding:0}}.projet.svelte-4o9oa.svelte-4o9oa{background-color:rgba(44, 154, 155, 0.1);display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:64px;transition:all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);background-color:#fff}@media only screen and (max-width: 960px){.projet.svelte-4o9oa.svelte-4o9oa{padding:32px 0px}}.projet.svelte-4o9oa .links.svelte-4o9oa{align-items:center;width:80%;height:64px}@media only screen and (max-width: 960px){.projet.svelte-4o9oa .links.svelte-4o9oa{height:fit-content}}.projet.svelte-4o9oa .links .link.svelte-4o9oa{padding:16px;transition:all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);display:flex;align-items:center;justify-content:center;border-left:#575757 solid 1px;height:100%}@media only screen and (max-width: 960px){.projet.svelte-4o9oa .links .link.svelte-4o9oa{border:none}}@media only screen and (min-width: 960px){.projet.svelte-4o9oa .links .link.svelte-4o9oa:nth-child(6){border-right:#575757 solid 1px}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { projets } = data;
  let container;
  let links;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="top" class="svelte-4o9oa"><h1 animate class="svelte-4o9oa">Nos projets</h1>
	<img alt="background-sogo" src="/images/projet-bg.png" class="svelte-4o9oa"></div>
<div class="gris svelte-4o9oa"><div class="question gris-child svelte-4o9oa"><h2 animate class="svelte-4o9oa">Que fait-on <br>
			chez Sogo Com ?
		</h2></div>

	<div class="reponse gris-child svelte-4o9oa"><p animate>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
			luctus.
			<br><br>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
			luctus.
			<br><br>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
			luctus.
			<br></p></div></div>
${projets != null && projets.length > 0 ? `<div class="projet svelte-4o9oa"${add_attribute("this", container, 0)}><div class="links svelte-4o9oa"${add_attribute("this", links, 0)}><form action="?/find" method="POST"><input type="hidden" name="typeProjet" value="redaction">
			<button type="submit" class="link svelte-4o9oa">Rédaction</button></form>
		<form action="?/find" method="POST"><input type="hidden" name="typeProjet" value="presse">
			<button type="submit" class="link svelte-4o9oa">Relation de presse</button></form>

		<form action="?/find" method="POST"><input type="hidden" name="typeProjet" value="graphisme">
			<button type="submit" class="link svelte-4o9oa">Graphisme</button></form>

		<form action="?/find" method="POST"><input type="hidden" name="typeProjet" value="reseaux">
			<button type="submit" class="link svelte-4o9oa">Réseaux sociaux</button></form>
		<form action="?/find" method="POST"><input type="hidden" name="typeProjet" value="photos">
			<button type="submit" class="link svelte-4o9oa">Photos et vidéos</button></form>

		<form action="?/find" method="POST"><input type="hidden" name="typeProjet" value="evenements">
			<button type="submit" class="link svelte-4o9oa">Évenements</button></form></div>

	${each(projets, (projet, index) => {
    return `${validate_component(ProjetRow, "ProjetRow").$$render(
      $$result,
      {
        isLeft: index % 2 == 0,
        imgLeft: index % 2 != 0 ? projet.photoLogo : projet.photo,
        imgRight: index % 2 == 0 ? projet.photoLogo : projet.photo,
        description: projet.descriptionCourte,
        title: projet.titre,
        ",": true,
        customClass: projet.typeProjet,
        link: "/projets/" + projet.id
      },
      {},
      {}
    )}`;
  })}</div>` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1dce5482.js.map
