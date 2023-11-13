import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, h as each } from './index3-cf31b2df.js';
import './index5-052ab730.js';
import './index2-65a07f2f.js';

/* empty css                                        */const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}.container.svelte-j6ovga.svelte-j6ovga{width:100%;height:100%;perspective:600px}.container.active.svelte-j6ovga.svelte-j6ovga{cursor:pointer}.container.svelte-j6ovga #flipcard.svelte-j6ovga{width:100%;height:100%;position:relative;transition:all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;transform-style:preserve-3d}.container.svelte-j6ovga #flipcard div.svelte-j6ovga{box-shadow:0 4px 40px rgba(0, 0, 0, 0.25);border-radius:32px;overflow:hidden;position:absolute;padding:16px;width:100%;height:100%;background:#fff;backface-visibility:hidden}.container.svelte-j6ovga #flipcard .front h3.svelte-j6ovga{padding:32px;text-align:center}.container.svelte-j6ovga #flipcard .front img.svelte-j6ovga{position:absolute;border-radius:500px;right:-15%;bottom:-35%;width:100%;height:100%;object-fit:cover;background-size:cover;background:antiquewhite}.container.svelte-j6ovga #flipcard .back.svelte-j6ovga{transform:rotateY(180deg);position:relative}.container.svelte-j6ovga #flipcard .back img.svelte-j6ovga{position:absolute;right:0;bottom:0;width:120%;height:120%;object-fit:contain;background-size:contain}.container.svelte-j6ovga #flipcard .back p.svelte-j6ovga{color:#fff;font-size:0.8em;position:relative;z-index:1;text-align:left}',
  map: null
};
const FlipCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageSrc } = $$props;
  let { titre = "titre" } = $$props;
  let { description = "description" } = $$props;
  let { link } = $$props;
  let container;
  let flipcard;
  if ($$props.imageSrc === void 0 && $$bindings.imageSrc && imageSrc !== void 0)
    $$bindings.imageSrc(imageSrc);
  if ($$props.titre === void 0 && $$bindings.titre && titre !== void 0)
    $$bindings.titre(titre);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  return `<div class="container active svelte-j6ovga"${add_attribute("this", container, 0)}><div id="flipcard" class="svelte-j6ovga"${add_attribute("this", flipcard, 0)}><div class="front svelte-j6ovga"><h3 class="svelte-j6ovga">${escape(titre)}</h3>
				<img${add_attribute("src", imageSrc, 0)}${add_attribute("alt", titre, 0)} class="svelte-j6ovga"></div>
			<div class="back svelte-j6ovga"><img src="/images/bubble.png" alt="bubble" class="svelte-j6ovga">
				<p class="svelte-j6ovga">${escape(description)}</p></div></div>
	</div>`;
});

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}#top.svelte-sv52hm.svelte-sv52hm{padding-top:120px}@media only screen and (max-width: 960px){#top.svelte-sv52hm.svelte-sv52hm{padding:120px 15% 0 15%}}#top.svelte-sv52hm h1.svelte-sv52hm{color:#575757;text-align:left;padding:32px 11%}@media only screen and (max-width: 960px){#top.svelte-sv52hm h1.svelte-sv52hm{padding:32px 0;text-align:center}}#top.svelte-sv52hm h2.svelte-sv52hm{padding:0px 11%;font-size:2rem;color:#575757;text-align:left}@media only screen and (max-width: 960px){#top.svelte-sv52hm h2.svelte-sv52hm{padding:0 32px;text-align:center}}#top.svelte-sv52hm .flip-container.svelte-sv52hm{display:flex;justify-content:end;transform:translate(0, -50px)}@media only screen and (max-width: 1150px){#top.svelte-sv52hm .flip-container.svelte-sv52hm{transform:translate(0, -30px)}}@media only screen and (max-width: 960px){#top.svelte-sv52hm .flip-container.svelte-sv52hm{display:none}}#top.svelte-sv52hm .flip-container .flipcard.svelte-sv52hm{margin-right:25%;position:relative;width:20vw;height:20vw;transform:translateX(50%)}@media only screen and (max-width: 1150px){#top.svelte-sv52hm .flip-container .flipcard.svelte-sv52hm{margin-right:10%}}@media only screen and (max-width: 960px){#top.svelte-sv52hm .flip-container .flipcard.svelte-sv52hm{margin-right:0;transform:none;width:80vw;height:80vw}}#top.svelte-sv52hm .flip-container .flipcard img.svelte-sv52hm{position:absolute;right:100%;bottom:-40%;width:200%;height:200%}@media only screen and (max-width: 960px){#top.svelte-sv52hm .flip-container .flipcard img.svelte-sv52hm{display:none}}@media only screen and (max-width: 960px){#top.svelte-sv52hm .actu-container h2.svelte-sv52hm{display:none}}#top.svelte-sv52hm .actualites.svelte-sv52hm{padding:32px 64px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}@media only screen and (max-width: 960px){#top.svelte-sv52hm .actualites.svelte-sv52hm{padding:0}}#top.svelte-sv52hm .actualites .flip-parent.svelte-sv52hm{flex-basis:33.3%;padding:2vw 3vw;display:flex;justify-content:center;align-items:center}@media only screen and (max-width: 1150px){#top.svelte-sv52hm .actualites .flip-parent.svelte-sv52hm{flex-basis:50%}}@media only screen and (max-width: 960px){#top.svelte-sv52hm .actualites .flip-parent.svelte-sv52hm{flex-basis:100%;padding:32px 0}}#top.svelte-sv52hm .actualites .flip-parent .flip-row.svelte-sv52hm{width:20vw;height:20vw}@media only screen and (max-width: 1150px){#top.svelte-sv52hm .actualites .flip-parent .flip-row.svelte-sv52hm{width:30vw;height:30vw}}@media only screen and (max-width: 960px){#top.svelte-sv52hm .actualites .flip-parent .flip-row.svelte-sv52hm{width:100%;height:100vw}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { actualites } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="top" class="svelte-sv52hm"><h1 class="svelte-sv52hm">Nos actualités</h1>
	<h2 class="svelte-sv52hm">Retrouvez notre dernier article</h2>
	<div class="flip-container svelte-sv52hm"><div class="flipcard svelte-sv52hm"><img src="/images/actualites-path.svg" alt="chemin" class="svelte-sv52hm">
			${validate_component(FlipCard, "FlipCard").$$render(
    $$result,
    {
      titre: "Stratégie de communication",
      imageSrc: "/images/ppl.png",
      link: "/actualites/1",
      description: "Une stratégie de communication, c’est la mise en œuvre d’une vision, le déploiement d’une identité de marque. "
    },
    {},
    {}
  )}</div></div>
	<div class="actu-container"><h2 class="svelte-sv52hm">Tous nos contenus</h2>
		<div class="actualites svelte-sv52hm">${each(actualites, (actualite, index) => {
    return `<div class="flip-parent svelte-sv52hm"><div class="flip-row svelte-sv52hm">${validate_component(FlipCard, "FlipCard").$$render(
      $$result,
      {
        link: "/actualites/" + actualite.id,
        imageSrc: actualite.photo,
        titre: actualite.titre ?? "Actualite n°" + index,
        description: actualite.descriptionCourte
      },
      {},
      {}
    )}</div>
				</div>`;
  })}

			<div class="flip-parent svelte-sv52hm"><div class="flip-row svelte-sv52hm">${validate_component(FlipCard, "FlipCard").$$render($$result, {}, {}, {})}</div></div>
			<div class="flip-parent svelte-sv52hm"><div class="flip-row svelte-sv52hm">${validate_component(FlipCard, "FlipCard").$$render($$result, {}, {}, {})}</div></div>
			<div class="flip-parent svelte-sv52hm"><div class="flip-row svelte-sv52hm">${validate_component(FlipCard, "FlipCard").$$render($$result, {}, {}, {})}</div></div>
			<div class="flip-parent svelte-sv52hm"><div class="flip-row svelte-sv52hm">${validate_component(FlipCard, "FlipCard").$$render($$result, {}, {}, {})}</div></div>
			<div class="flip-parent svelte-sv52hm"><div class="flip-row svelte-sv52hm">${validate_component(FlipCard, "FlipCard").$$render($$result, { link: "/actualites/5" }, {}, {})}</div></div>
			<div class="flip-parent svelte-sv52hm"><div class="flip-row svelte-sv52hm">${validate_component(FlipCard, "FlipCard").$$render($$result, {}, {}, {})}</div></div>
			<div class="flip-parent svelte-sv52hm"><div class="flip-row svelte-sv52hm">${validate_component(FlipCard, "FlipCard").$$render($$result, {}, {}, {})}</div></div>
			<div class="flip-parent svelte-sv52hm"><div class="flip-row svelte-sv52hm">${validate_component(FlipCard, "FlipCard").$$render($$result, {}, {}, {})}</div></div></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f2ccad35.js.map
