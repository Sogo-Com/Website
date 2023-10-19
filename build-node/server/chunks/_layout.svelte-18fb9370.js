import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from './index3-ec5c8fd3.js';
import { p as page } from './stores-145f0734.js';
import { t as t2 } from './index5-2fb00356.js';
import './index2-8abc0c01.js';

const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}#navContainer{position:fixed;top:0;background-color:#fff;width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;padding:32px 0;z-index:100}#navContainer .menu-container{margin-left:11%;margin-right:11%;width:100%;display:flex}@media only screen and (max-width: 1150px){#navContainer .menu-container{justify-content:space-between}}#navContainer .menu-container div,#navContainer .menu-container a{text-align:center;text-decoration:none;font-family:"Poppins-Light";color:#575757;font-size:24px}#navContainer .menu-container .logo{display:flex;align-items:start;flex-basis:25%}#navContainer .menu-container .menu{flex-basis:50%;display:flex;align-items:center}@media only screen and (max-width: 1150px){#navContainer .menu-container .menu{position:absolute;top:100%;width:100%;display:block;overflow:hidden;height:0;background-color:#fff;left:0}#navContainer .menu-container .menu .links{flex-direction:column}#navContainer .menu-container .menu .links a{padding:16px 0}#navContainer .menu-container .menu .presse{padding:16px 0;background-color:#DDB0AF}#navContainer .menu-container .menu.active{display:block !important}}#navContainer .menu-container .links{flex-grow:2}#navContainer .menu-container .links a{transition:0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);padding:16px;font-family:"Poppins-Medium"}#navContainer .menu-container .links a:hover{color:#DDB0AF}#navContainer .menu-container .links .mobile{color:#fff !important;width:-webkit-fill-available;justify-content:center;display:none}@media only screen and (max-width: 1150px){#navContainer .menu-container .links .mobile{display:flex}}#navContainer .menu-container .links .active{font-family:"Poppins-SemiBold";text-decoration:underline;color:#DDB0AF;text-underline-offset:20px}#navContainer .menu-container .presse{display:flex;justify-content:end;align-items:center;flex-basis:25%}@media only screen and (max-width: 1150px){#navContainer .menu-container .presse{display:none}}#navContainer .menu-container .presse .btn-container{width:fit-content;display:inline;display:inline-block;flex-grow:initial}#navContainer .menu-container .presse .btn-container .btn{background-color:#DDB0AF;width:fit-content;display:block;padding:10px 32px;border-radius:32px;color:#F5F5F5;font-size:24px}#navContainer .menu-container .mobile-btn{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}@media only screen and (min-width: 1150px){#navContainer .menu-container .mobile-btn{display:none}}#navContainer .menu-container .mobile-btn.active :nth-child(1){transform:rotate(45deg) translate(3px)}#navContainer .menu-container .mobile-btn.active :nth-child(2){opacity:0}#navContainer .menu-container .mobile-btn.active :nth-child(3){transform:rotate(-45deg)}#navContainer .menu-container .mobile-btn span{transform-origin:left;transition:0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);display:block;height:3px;margin:8px 16px;width:50px;background-color:#DDB0AF}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let links;
  let logo;
  let menu;
  let mobileBtn;
  $$result.css.add(css$1);
  $$unsubscribe_t();
  return `<div id="navContainer"><div class="menu-container"><div class="mobile-btn"${add_attribute("this", mobileBtn, 0)}><span class="mob-1"></span>
			<span class="mob-2"></span>
			<span class="mob-3"></span></div>

		<a data-sveltekit-reload class="logo" href="/"${add_attribute("this", logo, 0)}><img alt="logo menu" src="/images/logo-menu.svg"></a>

		<div class="menu"${add_attribute("this", menu, 0)}><div class="links"${add_attribute("this", links, 0)}><a href="/agence">${escape($t("common.menu-agence"))}</a>
				<a href="/expertises">${escape($t("common.menu-expertises"))}</a>
				<a data-sveltekit-reload href="/projets">${escape($t("common.menu-projets"))}</a>
				<a href="/actualites">${escape($t("common.menu-actualites"))}</a>
				<a href="/contact">${escape($t("common.menu-contact"))}</a>

				<a class="mobile presse" href="/">Espace Presse </a></div></div>
		<div class="presse"><div class="btn-container"><div class="btn">Espace Presse</div></div></div></div>
</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}footer.svelte-1tqx3rv .black.svelte-1tqx3rv{background-color:#575757;display:flex;justify-content:space-between;align-items:center;padding:32px}footer.svelte-1tqx3rv .black .logo.svelte-1tqx3rv{display:flex;justify-content:center;align-items:center;flex-basis:33.3%}footer.svelte-1tqx3rv .black .logo img.svelte-1tqx3rv{width:80%;height:50%}footer.svelte-1tqx3rv .black .links.svelte-1tqx3rv{flex-basis:33.3%;display:flex;flex-direction:row;flex-wrap:wrap}footer.svelte-1tqx3rv .black .links a.svelte-1tqx3rv{flex-basis:50%;font-family:"Poppins-Light";font-size:1rem;color:#F5F5F5;text-decoration:none;padding:16px 0}footer.svelte-1tqx3rv .white.svelte-1tqx3rv{background-color:#F5F5F5;display:flex;justify-content:center;align-items:center;font-family:"Poppins-Light";font-size:1rem;color:#575757}@media only screen and (max-width: 960px){footer.svelte-1tqx3rv .white.svelte-1tqx3rv{flex-direction:column}}footer.svelte-1tqx3rv .white a.svelte-1tqx3rv{padding:8px 16px;color:#575757;text-decoration:none}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-1tqx3rv"><div class="black svelte-1tqx3rv"><a class="logo svelte-1tqx3rv" href="/"><img alt="logo menu" src="/images/logo-menu-black.svg" class="svelte-1tqx3rv"></a>
		<div class="links svelte-1tqx3rv"><a href="/agence" class="svelte-1tqx3rv">Agence
			</a>
			<a href="/actualites" class="svelte-1tqx3rv">Actualités
			</a>
			<a href="/competences" class="svelte-1tqx3rv">Compétences
			</a>
			<a href="/contact" class="svelte-1tqx3rv">Contact
			</a>
			<a href="/projets" class="svelte-1tqx3rv">Projets
			</a>
			
			<a href="/presse" class="svelte-1tqx3rv">Espace presse
			</a></div></div>
	<div class="white svelte-1tqx3rv"><a href="/mentions" class="svelte-1tqx3rv">Mentions légales
		</a>
		-
		<a href="/donnees-personelles" class="svelte-1tqx3rv">Données personnelles
		</a>
		-
		<a class="svelte-1tqx3rv">Préférence cookies
		</a></div>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1mhw16t_START --><link rel="icon"${add_attribute("href", $page.data.icon || "/favicon.png", 0)}>${$$result.title = `<title>${escape($page.data.title || "Selte Begins")}</title>`, ""}<!-- HEAD_svelte-1mhw16t_END -->`, ""}

<div class="app">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main>${slots.default ? slots.default({}) : ``}</main>

    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-18fb9370.js.map
