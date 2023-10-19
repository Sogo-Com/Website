import { c as create_ssr_component } from './index3-ec5c8fd3.js';
import './index-0087e825.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}.back-office.svelte-1fjk3n9.svelte-1fjk3n9{display:flex;height:100vh}.sidebar.svelte-1fjk3n9.svelte-1fjk3n9{width:250px;background-color:#E1E1E1;padding:20px}.sidebar.svelte-1fjk3n9 .logo.svelte-1fjk3n9{margin-bottom:20px}.sidebar.svelte-1fjk3n9 .logo img.svelte-1fjk3n9{max-width:100%}.sidebar.svelte-1fjk3n9 .menu.svelte-1fjk3n9{list-style:none;padding:0}.sidebar.svelte-1fjk3n9 .menu li.svelte-1fjk3n9{margin-bottom:10px}.sidebar.svelte-1fjk3n9 .menu li a.svelte-1fjk3n9{text-decoration:none;color:var(--color-gris-dark);font-family:var(--font-secondary-regular);font-size:16px;transition:color 0.3s ease}.sidebar.svelte-1fjk3n9 .menu li a.svelte-1fjk3n9:hover{color:var(--color-gris)}.main-content.svelte-1fjk3n9.svelte-1fjk3n9{flex:1}.header.svelte-1fjk3n9.svelte-1fjk3n9{background-color:#E1E1E1}.header.svelte-1fjk3n9 .header-content.svelte-1fjk3n9{display:flex;justify-content:space-between;align-items:center}.header.svelte-1fjk3n9 .header-content .logout-button.svelte-1fjk3n9{height:50px;background-color:var(--color-bordeaux);color:var(--color-blanc);padding:0 20px;font-family:var(--font-secondary-bold);border:none;cursor:pointer;transition:background-color 0.3s ease}.header.svelte-1fjk3n9 .header-content .logout-button.svelte-1fjk3n9:hover{background-color:var(--color-rose)}.header.svelte-1fjk3n9 .header-content .view-site-button.svelte-1fjk3n9{height:50px;background-color:var(--color-bleu);color:var(--color-blanc);padding:0 20px;font-family:var(--font-secondary-bold);text-decoration:none;border:none;cursor:pointer;transition:background-color 0.3s ease;display:flex;align-items:center}.header.svelte-1fjk3n9 .header-content .view-site-button.svelte-1fjk3n9:hover{background-color:var(--color-kaki)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="back-office svelte-1fjk3n9">
	<div class="sidebar svelte-1fjk3n9"><div class="logo svelte-1fjk3n9"><img src="/images/sogo-pink.png" alt="Logo de l'entreprise" class="svelte-1fjk3n9"></div>
		<ul class="menu svelte-1fjk3n9"><li class="svelte-1fjk3n9"><a href="/admin/contacts" class="svelte-1fjk3n9">Demandes de contact</a></li></ul></div>

	
	<div class="main-content svelte-1fjk3n9"><header class="header svelte-1fjk3n9"><div class="header-content svelte-1fjk3n9"><button class="logout-button svelte-1fjk3n9">Déconnexion</button>
				<a href="/" target="_blank" class="view-site-button svelte-1fjk3n9"><div>Voir le site</div></a></div></header>

		${slots.default ? slots.default({}) : ``}
		</div>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-8195cb71.js.map
