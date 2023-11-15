import { c as create_ssr_component, b as add_attribute, d as each, v as validate_component, e as escape } from './index3-7ceb3c84.js';

const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}.sub-project.svelte-183u20j.svelte-183u20j{padding:64px 11%;height:fit-content;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-evenly;align-items:center}.sub-project.blanc.svelte-183u20j.svelte-183u20j{background-color:#fff}@media only screen and (max-width: 960px){.sub-project.blanc.svelte-183u20j .contenu.svelte-183u20j{align-items:start;text-align:start}}.sub-project.bleu.svelte-183u20j.svelte-183u20j{background-color:rgba(44, 154, 155, 0.1)}@media only screen and (max-width: 960px){.sub-project.bleu.svelte-183u20j .contenu.svelte-183u20j{align-items:end;text-align:end}}@media only screen and (max-width: 960px){.sub-project.svelte-183u20j.svelte-183u20j{flex-direction:column;padding:32px 12px}}.sub-project.svelte-183u20j .contenu.svelte-183u20j{max-width:40vw;padding:32px}@media only screen and (max-width: 960px){.sub-project.svelte-183u20j .contenu.svelte-183u20j{max-width:unset;padding:0px;display:flex;flex-direction:column;justify-content:center;align-items:center}}.sub-project.svelte-183u20j .contenu h3.svelte-183u20j{position:relative;z-index:1;width:fit-content}@media only screen and (max-width: 960px){.sub-project.svelte-183u20j .contenu h3.svelte-183u20j{margin-bottom:16px}}.sub-project.svelte-183u20j .contenu h3.svelte-183u20j:before{background-color:rgba(44, 154, 155, 0.1);display:block;position:absolute;left:-15%;z-index:-1;bottom:15%;border-radius:50px;content:"";width:50px;height:50px}@media only screen and (max-width: 960px){.sub-project.svelte-183u20j .contenu h3.svelte-183u20j:before{display:none}}.sub-project.svelte-183u20j .contenu h3.svelte-183u20j:after{background-color:rgba(44, 154, 155, 0.1);display:block;position:absolute;border-radius:50px;top:15%;left:85%;content:"";z-index:-1;width:50px;height:50px}@media only screen and (max-width: 960px){.sub-project.svelte-183u20j .contenu h3.svelte-183u20j:after{display:none}}.sub-project.svelte-183u20j .contenu .texte.svelte-183u20j{padding:0 0 32px 0;font-family:"Poppins-Light"}@media only screen and (max-width: 960px){.sub-project.svelte-183u20j .contenu .texte.svelte-183u20j{padding:0}}.sub-project.svelte-183u20j .contenu .btn.svelte-183u20j{background-color:#2C9A9B}@media only screen and (max-width: 960px){.sub-project.svelte-183u20j .contenu .btn.svelte-183u20j{margin-top:16px}}.sub-project.svelte-183u20j .trait.svelte-183u20j{width:2px;height:300px;background-color:#575757;margin:0 32px}@media only screen and (max-width: 960px){.sub-project.svelte-183u20j .trait.svelte-183u20j{display:none}}.sub-project.svelte-183u20j .images.svelte-183u20j{flex-basis:15%}@media only screen and (max-width: 960px){.sub-project.svelte-183u20j .images.svelte-183u20j{display:none}}.sub-project.svelte-183u20j .images img.svelte-183u20j{width:100%;height:100%;object-fit:cover;background-size:cover}.sub-project.svelte-183u20j .images.big.svelte-183u20j{flex-basis:25%}',
  map: null
};
const ProjetRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLeft = "true" } = $$props;
  let { imgLeft } = $$props;
  let { imgRight } = $$props;
  let { link } = $$props;
  let { title } = $$props;
  let { description } = $$props;
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
  return `<div class="${"sub-project " + escape(isLeft == "true" ? "blanc" : "bleu", true) + " svelte-183u20j"}"><div class="${"images " + escape(isLeft == "false" ? "big" : "", true) + " svelte-183u20j"}"><img${add_attribute("src", imgLeft, 0)} alt="tomme" class="svelte-183u20j"></div>


    ${isLeft == "true" ? `<div class="trait svelte-183u20j"></div>` : ``}

    <div class="contenu svelte-183u20j"><h3 class="svelte-183u20j">${escape(title)}</h3>
        <div class="texte svelte-183u20j">${escape(description)}</div>
        <div class="btn bleu svelte-183u20j">En savoir +</div></div>

    ${isLeft == "false" ? `<div class="trait svelte-183u20j"></div>` : ``}

    <div class="${"images " + escape(isLeft == "true" ? "big" : "", true) + " svelte-183u20j"}"><img${add_attribute("src", imgRight, 0)} alt="tomme" class="svelte-183u20j"></div>
</div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}#top.svelte-50di88.svelte-50di88{height:100vh;position:relative;display:flex}@media only screen and (max-width: 960px){#top.svelte-50di88.svelte-50di88{height:50vh;align-items:end}}#top.svelte-50di88 h1.svelte-50di88{color:#fff;text-align:left;padding:256px 11%;z-index:15;position:relative}@media only screen and (max-width: 960px){#top.svelte-50di88 h1.svelte-50di88{padding:64px 8px;width:100%;text-align:center}}#top.svelte-50di88 img.svelte-50di88{width:100%;height:100%;position:absolute;top:0;z-index:10;background-size:cover;object-fit:cover}.gris.svelte-50di88.svelte-50di88{display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:#E1E1E1}@media only screen and (max-width: 960px){.gris.svelte-50di88.svelte-50di88{flex-direction:column;margin:0;padding:32px 12px}}.gris.svelte-50di88 .gris-child.svelte-50di88{flex-basis:50%}@media only screen and (max-width: 960px){.gris.svelte-50di88 .gris-child.svelte-50di88{flex-basis:100%;width:100%}}.gris.svelte-50di88 .question.svelte-50di88{padding:128px 64px 128px 11%}@media only screen and (max-width: 960px){.gris.svelte-50di88 .question.svelte-50di88{flex-direction:column;padding:0;text-align:center}}.gris.svelte-50di88 .question h2.svelte-50di88{color:#575757}.gris.svelte-50di88 .reponse.svelte-50di88{padding:128px 11% 128px 64px}@media only screen and (max-width: 960px){.gris.svelte-50di88 .reponse.svelte-50di88{flex-direction:column;padding:0}}.projet.svelte-50di88.svelte-50di88{background-color:rgba(44, 154, 155, 0.1);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:64px 0;transition:all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);background-color:#fff}@media only screen and (max-width: 960px){.projet.svelte-50di88.svelte-50di88{padding:32px 0px}}.projet.svelte-50di88 .links.svelte-50di88{align-items:center;width:80%;height:64px}@media only screen and (max-width: 960px){.projet.svelte-50di88 .links.svelte-50di88{height:fit-content}}.projet.svelte-50di88 .links .link.svelte-50di88{padding:16px;transition:all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);display:flex;align-items:center;justify-content:center;border-left:#575757 solid 1px;height:100%}@media only screen and (max-width: 960px){.projet.svelte-50di88 .links .link.svelte-50di88{border:none}}@media only screen and (min-width: 960px){.projet.svelte-50di88 .links .link.svelte-50di88:nth-child(6){border-right:#575757 solid 1px}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { projets } = data;
  let container;
  let links;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="top" class="svelte-50di88"><h1 class="svelte-50di88">Nos projets</h1>
	<img alt="background-sogo" src="/images/projet-bg.png" class="svelte-50di88"></div>
<div class="gris svelte-50di88"><div class="question gris-child svelte-50di88"><h2 class="svelte-50di88">Que fait-on <br>
			chez Sogo Com ?
		</h2></div>

	<div class="reponse gris-child svelte-50di88"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at
			luctus.
		</p>
		<br>
		<p>Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem
			ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus.
		</p>
		<br>
		<p>Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar condimentum.Lorem
			ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at luctus.
		</p></div></div>

<div class="projet svelte-50di88"${add_attribute("this", container, 0)}><div class="links svelte-50di88"${add_attribute("this", links, 0)}>
		<div class="link svelte-50di88">Rédaction
		</div>

		
		<div class="link svelte-50di88">Relation de presse
		</div>

		
		<div class="link svelte-50di88">Graphisme
		</div>

		
		<div class="link svelte-50di88">Réseaux sociaux
		</div>

		
		<div class="link svelte-50di88">Photos et vidéos
		</div>

		
		<div class="link svelte-50di88">Évenements
		</div></div>

	${each(projets, (projet, index) => {
    return `${validate_component(ProjetRow, "ProjetRow").$$render(
      $$result,
      {
        isLeft: index % 2 != 0,
        imgLeft: index % 2 != 0 ? projet.photoLogo : projet.photo,
        imgRight: index % 2 == 0 ? projet.photoLogo : projet.photo,
        description: projet.descriptionCourte,
        title: projet.titre,
        ",": true,
        link: "/projets/" + projet.id
      },
      {},
      {}
    )}`;
  })}

	${validate_component(ProjetRow, "ProjetRow").$$render(
    $$result,
    {
      isLeft: "true",
      imgLeft: "/images/tomme-bauges.png",
      imgRight: "/images/livre.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at\r\n		luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar\r\n		condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque\r\n		facilisis orci at luctus.",
      title: "Tome des Bauges",
      ",": true,
      link: "/projets/1"
    },
    {},
    {}
  )}

	${validate_component(ProjetRow, "ProjetRow").$$render(
    $$result,
    {
      isLeft: "false",
      imgLeft: "/images/bouteille.png",
      imgRight: "/images/distillerie.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at\r\n		luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar\r\n		condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque\r\n		facilisis orci at luctus.",
      title: "Distillerie St Esprit",
      ",": true,
      link: "/projets/1"
    },
    {},
    {}
  )}

	${validate_component(ProjetRow, "ProjetRow").$$render(
    $$result,
    {
      isLeft: "true",
      imgLeft: "/images/st-marcellin.png",
      imgRight: "/images/livre.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis orci at\r\n		luctus. Donec in euismod nibh. Ut mollis enim neque, et tincidunt nulla pulvinar\r\n		condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque\r\n		facilisis orci at luctus.",
      title: "St Marcellin",
      ",": true,
      link: "/projets/1"
    },
    {},
    {}
  )}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1dc78197.js.map
