import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from './index3-560a1835.js';
import { R as Reader } from './Reader-339fc317.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}#top.svelte-1t8py00.svelte-1t8py00.svelte-1t8py00{height:100vh;width:100%;overflow:hidden;position:relative;display:flex;justify-content:start;align-items:end}@media only screen and (max-width: 960px){#top.svelte-1t8py00.svelte-1t8py00.svelte-1t8py00{align-items:center;height:60vh}}#top.svelte-1t8py00 img.svelte-1t8py00.svelte-1t8py00{width:100%;height:100%;position:absolute;top:0;z-index:10;background-size:cover;object-fit:cover}.projet.svelte-1t8py00.svelte-1t8py00.svelte-1t8py00{z-index:15;position:relative;border-radius:32px;padding:64px 10%;margin:-400px 20% 64px 20%;background-color:#fff}@media only screen and (max-width: 1150px){.projet.svelte-1t8py00.svelte-1t8py00.svelte-1t8py00{margin:-300px 10% 32px 10%}}@media only screen and (max-width: 960px){.projet.svelte-1t8py00.svelte-1t8py00.svelte-1t8py00{margin:0;padding:64px 12px 32px 12px}}.projet.svelte-1t8py00 h1.svelte-1t8py00.svelte-1t8py00{color:#575757;padding:8px 0;font-size:3rem}.projet.svelte-1t8py00 .actu-bar.svelte-1t8py00.svelte-1t8py00{margin:32px 0;border-top:solid #575757 1px;border-bottom:solid #575757 1px;display:flex;flex-direction:row;justify-content:space-around}.projet.svelte-1t8py00 .actu-bar div.svelte-1t8py00.svelte-1t8py00{padding:16px 0;display:flex;width:fit-content;flex-basis:33.3%;align-items:center;font-family:"Poppins-Light";flex-grow:1;text-align:left}.projet.svelte-1t8py00 .actu-bar div.svelte-1t8py00 img.svelte-1t8py00{padding:0 16px}.projet.svelte-1t8py00 .actu-bar .calendar.svelte-1t8py00.svelte-1t8py00{justify-content:left}.projet.svelte-1t8py00 .actu-bar .commentary.svelte-1t8py00.svelte-1t8py00{justify-content:right}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { projet } = data;
  const contenu = projet.contenu != null ? JSON.parse(projet.contenu) : {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="top" class="svelte-1t8py00"><img alt="background-sogo"${add_attribute("src", projet.photo ?? "/images/agence-bg.png", 0)} class="svelte-1t8py00"></div>

<div class="projet svelte-1t8py00"><h1 animate class="svelte-1t8py00">${escape(projet.titre ?? "Projet")}</h1>

	<div class="actu-bar svelte-1t8py00"><div class="calendar svelte-1t8py00"><img src="/images/calendar.svg" alt="calendar" class="svelte-1t8py00">
			${escape(new Intl.DateTimeFormat("en-GB").format(projet.createdAt))}</div>

		<div class="commentary svelte-1t8py00"><img src="/images/commentary.svg" alt="commentary" class="svelte-1t8py00">
			${escape(projet.typeProjet)}</div></div>

	<div class="contenu svelte-1t8py00">${validate_component(Reader, "Reader").$$render($$result, { contenu }, {}, {})}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-54fc95c2.js.map
