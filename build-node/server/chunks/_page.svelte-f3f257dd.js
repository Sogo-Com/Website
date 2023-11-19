import { c as create_ssr_component, v as validate_component, d as each } from './index3-560a1835.js';
import { F as FlipCard } from './FlipCard-0ced05df.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}#top.svelte-cabliy.svelte-cabliy{padding-top:120px}@media only screen and (max-width: 960px){#top.svelte-cabliy.svelte-cabliy{padding:120px 15% 0 15%}}#top.svelte-cabliy h1.svelte-cabliy{color:#575757;text-align:left;padding:32px 11%}@media only screen and (max-width: 960px){#top.svelte-cabliy h1.svelte-cabliy{padding:32px 0;text-align:center}}#top.svelte-cabliy h2.svelte-cabliy{padding:0px 11%;font-size:2rem;color:#575757;text-align:left}@media only screen and (max-width: 960px){#top.svelte-cabliy h2.svelte-cabliy{padding:0 32px;text-align:center}}#top.svelte-cabliy .flip-container.svelte-cabliy{display:flex;justify-content:end;transform:translate(0, -50px)}@media only screen and (max-width: 1150px){#top.svelte-cabliy .flip-container.svelte-cabliy{transform:translate(0, -30px)}}@media only screen and (max-width: 960px){#top.svelte-cabliy .flip-container.svelte-cabliy{display:none}}#top.svelte-cabliy .flip-container .flipcard.svelte-cabliy{margin-right:25%;position:relative;width:20vw;height:20vw;transform:translateX(50%)}@media only screen and (max-width: 1150px){#top.svelte-cabliy .flip-container .flipcard.svelte-cabliy{margin-right:10%}}@media only screen and (max-width: 960px){#top.svelte-cabliy .flip-container .flipcard.svelte-cabliy{margin-right:0;transform:none;width:80vw;height:80vw}}#top.svelte-cabliy .flip-container .flipcard img.svelte-cabliy{position:absolute;right:100%;bottom:-40%;width:200%;height:200%}@media only screen and (max-width: 960px){#top.svelte-cabliy .flip-container .flipcard img.svelte-cabliy{display:none}}@media only screen and (max-width: 960px){#top.svelte-cabliy .actu-container h2.svelte-cabliy{display:none}}#top.svelte-cabliy .actualites.svelte-cabliy{padding:32px 64px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}@media only screen and (max-width: 960px){#top.svelte-cabliy .actualites.svelte-cabliy{padding:0}}#top.svelte-cabliy .actualites .flip-parent.svelte-cabliy{flex-basis:33.3%;padding:2vw 3vw;display:flex;justify-content:center;align-items:center}@media only screen and (max-width: 1150px){#top.svelte-cabliy .actualites .flip-parent.svelte-cabliy{flex-basis:50%}}@media only screen and (max-width: 960px){#top.svelte-cabliy .actualites .flip-parent.svelte-cabliy{flex-basis:100%;padding:32px 0}}#top.svelte-cabliy .actualites .flip-parent .flip-row.svelte-cabliy{width:20vw;height:20vw}@media only screen and (max-width: 1150px){#top.svelte-cabliy .actualites .flip-parent .flip-row.svelte-cabliy{width:30vw;height:30vw}}@media only screen and (max-width: 960px){#top.svelte-cabliy .actualites .flip-parent .flip-row.svelte-cabliy{width:100%;height:100vw}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { actualites } = data;
  const firstActualite = actualites.length > 0 ? actualites[0] : null;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="top" class="svelte-cabliy"><h1 animate class="svelte-cabliy">Nos actualités</h1>
	${firstActualite != null ? `<h2 animate class="svelte-cabliy">Retrouvez notre dernier article</h2>
		<div class="flip-container svelte-cabliy"><div class="flipcard svelte-cabliy"><img src="/images/actualites-path.svg" alt="chemin" class="svelte-cabliy">
				${validate_component(FlipCard, "FlipCard").$$render(
    $$result,
    {
      link: "/actualites/" + firstActualite.id,
      imageSrc: firstActualite.photo,
      titre: firstActualite.titre ?? "Actualité !",
      description: firstActualite.descriptionCourte
    },
    {},
    {}
  )}</div></div>` : ``}
	
	<div class="actu-container"><h2 class="svelte-cabliy">Tous nos contenus</h2>
		<div class="actualites svelte-cabliy">${each(actualites, (actualite, index) => {
    return `<div class="flip-parent svelte-cabliy"><div class="flip-row svelte-cabliy">${validate_component(FlipCard, "FlipCard").$$render(
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
  })}</div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f3f257dd.js.map
