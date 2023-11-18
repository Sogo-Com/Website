import { c as create_ssr_component, v as validate_component, d as each } from './ssr-28b17f7a.js';
import { F as FlipCard } from './FlipCard-f88441fb.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:360px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 360px){:root{font-size:10px}}#top.svelte-1oxxqbe.svelte-1oxxqbe{padding-top:120px}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe.svelte-1oxxqbe{padding:120px 15% 0 15%}}#top.svelte-1oxxqbe h1.svelte-1oxxqbe{color:#575757;text-align:left;padding:32px 11%}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe h1.svelte-1oxxqbe{padding:32px 0;text-align:center}}#top.svelte-1oxxqbe h2.svelte-1oxxqbe{padding:0px 11%;font-size:2rem;color:#575757;text-align:left}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe h2.svelte-1oxxqbe{padding:0 32px;text-align:center}}#top.svelte-1oxxqbe .flip-container.svelte-1oxxqbe{display:flex;justify-content:end;transform:translate(0, -50px)}@media only screen and (max-width: 1150px){#top.svelte-1oxxqbe .flip-container.svelte-1oxxqbe{transform:translate(0, -30px)}}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe .flip-container.svelte-1oxxqbe{display:none}}#top.svelte-1oxxqbe .flip-container .flipcard.svelte-1oxxqbe{margin-right:25%;position:relative;width:20vw;height:20vw;transform:translateX(50%)}@media only screen and (max-width: 1150px){#top.svelte-1oxxqbe .flip-container .flipcard.svelte-1oxxqbe{margin-right:10%}}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe .flip-container .flipcard.svelte-1oxxqbe{margin-right:0;transform:none;width:80vw;height:80vw}}#top.svelte-1oxxqbe .flip-container .flipcard img.svelte-1oxxqbe{position:absolute;right:100%;bottom:-40%;width:200%;height:200%}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe .flip-container .flipcard img.svelte-1oxxqbe{display:none}}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe .actu-container h2.svelte-1oxxqbe{display:none}}#top.svelte-1oxxqbe .actualites.svelte-1oxxqbe{padding:32px 64px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe .actualites.svelte-1oxxqbe{padding:0}}#top.svelte-1oxxqbe .actualites .flip-parent.svelte-1oxxqbe{flex-basis:33.3%;padding:2vw 3vw;display:flex;justify-content:center;align-items:center}@media only screen and (max-width: 1150px){#top.svelte-1oxxqbe .actualites .flip-parent.svelte-1oxxqbe{flex-basis:50%}}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe .actualites .flip-parent.svelte-1oxxqbe{flex-basis:100%;padding:32px 0}}#top.svelte-1oxxqbe .actualites .flip-parent .flip-row.svelte-1oxxqbe{width:20vw;height:20vw}@media only screen and (max-width: 1150px){#top.svelte-1oxxqbe .actualites .flip-parent .flip-row.svelte-1oxxqbe{width:30vw;height:30vw}}@media only screen and (max-width: 960px){#top.svelte-1oxxqbe .actualites .flip-parent .flip-row.svelte-1oxxqbe{width:100%;height:100vw}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { actualites } = data;
  const firstActualite = actualites.length > 0 ? actualites[0] : null;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="top" class="svelte-1oxxqbe"><h1 class="svelte-1oxxqbe" data-svelte-h="svelte-1qcb69f">Nos actualités</h1> ${firstActualite != null ? `<h2 class="svelte-1oxxqbe" data-svelte-h="svelte-yewu1f">Retrouvez notre dernier article</h2> <div class="flip-container svelte-1oxxqbe"><div class="flipcard svelte-1oxxqbe"><img src="/images/actualites-path.svg" alt="chemin" class="svelte-1oxxqbe"> ${validate_component(FlipCard, "FlipCard").$$render(
    $$result,
    {
      link: "/actualites/" + firstActualite.id,
      imageSrc: firstActualite.photo,
      titre: firstActualite.titre ?? "Actualité !",
      description: firstActualite.descriptionCourte
    },
    {},
    {}
  )}</div></div>` : ``} <div class="actu-container"><h2 class="svelte-1oxxqbe" data-svelte-h="svelte-z377su">Tous nos contenus</h2> <div class="actualites svelte-1oxxqbe">${each(actualites, (actualite, index) => {
    return `<div class="flip-parent svelte-1oxxqbe"><div class="flip-row svelte-1oxxqbe">${validate_component(FlipCard, "FlipCard").$$render(
      $$result,
      {
        link: "/actualites/" + actualite.id,
        imageSrc: actualite.photo,
        titre: actualite.titre ?? "Actualite n°" + index,
        description: actualite.descriptionCourte
      },
      {},
      {}
    )}</div> </div>`;
  })}</div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-87eb111c.js.map
