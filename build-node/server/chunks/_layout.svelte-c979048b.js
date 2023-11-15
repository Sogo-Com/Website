import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from './ssr-4049a6a7.js';
import { p as page } from './stores-432bbceb.js';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText.js';

function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const onNavigate = /* @__PURE__ */ client_method("on_navigate");
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}h1:not([data-noamin]),h2:not([data-noamin]),h3:not([data-noamin]){opacity:0;visibility:hidden}',
  map: null
};
const Animations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const methods = {
    refresh: () => {
      const noanim = ":not([data-noamin])";
      const isMedia = window.matchMedia("(max-width:1150px)").matches;
      console.log(isMedia);
      document.querySelectorAll("h1")?.forEach((elem) => {
        const splited = new SplitText(elem, { type: "words,chars" });
        gsap.to(elem, { autoAlpha: 1 });
        gsap.fromTo(splited.chars, { y: 10, autoAlpha: 0 }, {
          delay: 0.5,
          stagger: 0.03,
          duration: 0.05,
          y: 0,
          autoAlpha: 1
        });
      });
      const revealElements = "h2" + noanim + ",h3" + noanim;
      document.querySelectorAll(revealElements)?.forEach((elem) => {
        const splited = new SplitText(elem, { type: "words,chars" });
        gsap.to(elem, { autoAlpha: 1 });
        const props = {
          start: isMedia ? "top 80%" : "top 70%",
          end: isMedia ? "bottom 80%" : "bottom 70%"
        };
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: elem,
            start: props.start,
            end: props.end
          }
        });
        tl.fromTo(splited.chars, { y: 10, autoAlpha: 0 }, {
          stagger: 0.03,
          duration: 0.05,
          y: 0,
          autoAlpha: 1
        });
      });
      document.querySelectorAll(".app .btn")?.forEach((button) => {
        const props = {
          start: isMedia ? "top 80%" : "top 70%",
          end: isMedia ? "bottom 80%" : "bottom 70%"
        };
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: button,
            start: props.start,
            end: props.end,
            scrub: true
          }
        });
        tl.fromTo(button, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1 });
      });
      document.querySelectorAll(".app p")?.forEach((paragraph) => {
        const props = {
          start: isMedia ? "top 90%" : "top 80%",
          end: isMedia ? "bottom 90%" : "bottom 80%",
          scrub: !isMedia,
          stagger: isMedia ? 0.05 : 0.02
        };
        const splited = new SplitText(paragraph, { type: "line,words,chars" });
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: paragraph,
            start: props.start,
            end: props.end,
            scrub: props.scrub
          }
        });
        tl.fromTo(splited.words, { y: 10, autoAlpha: 0 }, {
          stagger: props.stagger,
          duration: 0.05,
          y: 0,
          autoAlpha: 1
        });
      });
    }
  };
  if ($$props.methods === void 0 && $$bindings.methods && methods !== void 0)
    $$bindings.methods(methods);
  $$result.css.add(css$2);
  return ``;
});
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}#navContainer{position:fixed;top:0;background-color:#fff;width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;padding:32px 0;z-index:100}#navContainer .menu-container{margin-left:11%;margin-right:11%;width:100%;display:flex}@media only screen and (max-width: 1150px){#navContainer .menu-container{justify-content:space-between}}@media only screen and (max-width: 960px){#navContainer .menu-container{margin-left:5%;margin-right:5%}}#navContainer .menu-container div,#navContainer .menu-container a{text-align:center;text-decoration:none;font-family:"Poppins-Light";color:#575757;font-size:24px}#navContainer .menu-container .logo-menu{display:flex;align-items:start;flex-basis:25%}@media only screen and (max-width: 960px){#navContainer .menu-container .logo-menu{align-items:center}}#navContainer .menu-container .menu{flex-basis:50%;display:flex;align-items:center}@media only screen and (max-width: 1150px){#navContainer .menu-container .menu{position:absolute;top:100%;width:100%;display:block;overflow:hidden;height:0;background-color:#fff;left:0}#navContainer .menu-container .menu .links{flex-direction:column}#navContainer .menu-container .menu .links a{padding:16px 0}#navContainer .menu-container .menu .presse{padding:16px 0;background-color:#DDB0AF}}#navContainer .menu-container .links{flex-grow:2}#navContainer .menu-container .links a{transition:0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);padding:16px;font-family:"Poppins-Medium"}#navContainer .menu-container .links a:hover{color:#DDB0AF}#navContainer .menu-container .links .mobile{color:#fff !important;width:-webkit-fill-available;justify-content:center;display:none}@media only screen and (max-width: 1150px){#navContainer .menu-container .links .mobile{display:flex}}#navContainer .menu-container .links .active{font-family:"Poppins-SemiBold";text-decoration:underline;color:#DDB0AF;text-underline-offset:20px}#navContainer .menu-container .presse{display:flex;justify-content:end;align-items:center;flex-basis:25%}@media only screen and (max-width: 1150px){#navContainer .menu-container .presse{display:none}}#navContainer .menu-container .presse .btn-container{width:fit-content;display:inline;display:inline-block;flex-grow:initial}#navContainer .menu-container .presse .btn-container .btn{background-color:#DDB0AF;width:fit-content;display:block;padding:10px 32px;border-radius:32px;color:#F5F5F5;font-size:24px}#navContainer .menu-container .mobile-btn{transition:cubic-bezier(0.39, 0.575, 0.565, 1) all 0.3s;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;cursor:pointer}@media only screen and (min-width: 1150px){#navContainer .menu-container .mobile-btn{display:none}}#navContainer .menu-container .mobile-btn :nth-child(1){bottom:0px}#navContainer .menu-container .mobile-btn :nth-child(3){top:0px}#navContainer .menu-container .mobile-btn.active :nth-child(1){transform:rotate(45deg) translate(3px);bottom:0px !important}#navContainer .menu-container .mobile-btn.active :nth-child(2){opacity:0}#navContainer .menu-container .mobile-btn.active :nth-child(3){transform:rotate(-45deg);top:0px !important}#navContainer .menu-container .mobile-btn span{transform-origin:left;transition:0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);display:block;height:3px;margin:8px 16px;width:50px;position:relative;background-color:#DDB0AF}@media only screen and (max-width: 960px){#navContainer .menu-container .mobile-btn span{width:50px;margin:8px 0px}}#navContainer .menu-container .mobile-btn:hover :nth-child(1){bottom:-5px}#navContainer .menu-container .mobile-btn:hover :nth-child(3){top:-5px}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links;
  let logo;
  let menu;
  let mobileBtn;
  $$result.css.add(css$1);
  return `<div id="navContainer"><div class="menu-container"><a data-sveltekit-reload class="logo-menu" href="/"${add_attribute("this", logo, 0)} data-svelte-h="svelte-1cvexsn"><img alt="logo menu" src="/images/logo-menu.svg"></a> <div class="menu"${add_attribute("this", menu, 0)}><div class="links"${add_attribute("this", links, 0)} data-svelte-h="svelte-1ubwlhv"><a href="/agence">Agence</a> <a href="/expertises">Expertises</a> <a href="/projets">Projets</a> <a href="/actualites">Actualites</a> <a href="/contact">Contact</a> <a class="mobile presse" href="/presse">Espace Presse</a></div></div> <div class="presse" data-svelte-h="svelte-1hevrxp"><a href="/presse"><div class="btn-container"><div class="btn">Espace Presse</div></div></a></div> <div class="mobile-btn"${add_attribute("this", mobileBtn, 0)} data-svelte-h="svelte-1effg8u"><span class="mob-1"></span> <span class="mob-2"></span> <span class="mob-3"></span></div></div> </div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}footer.svelte-1i48nut .black.svelte-1i48nut{background-color:#575757;display:flex;justify-content:space-between;align-items:center;padding:32px}@media only screen and (max-width: 960px){footer.svelte-1i48nut .black.svelte-1i48nut{flex-direction:column-reverse}}footer.svelte-1i48nut .black .logo.svelte-1i48nut{display:flex;justify-content:center;align-items:center;flex-basis:33.3%}footer.svelte-1i48nut .black .logo img.svelte-1i48nut{width:80%;height:50%}@media only screen and (max-width: 960px){footer.svelte-1i48nut .black .logo.svelte-1i48nut{margin-bottom:32px}}footer.svelte-1i48nut .black .links.svelte-1i48nut{flex-basis:33.3%;display:flex;flex-direction:row;flex-wrap:wrap}@media only screen and (max-width: 960px){footer.svelte-1i48nut .black .links.svelte-1i48nut{margin-bottom:32px}}footer.svelte-1i48nut .black .links a.svelte-1i48nut{flex-basis:50%;font-family:"Poppins-Light";font-size:1rem;color:#F5F5F5;text-decoration:none;padding:16px 0}@media only screen and (max-width: 960px){footer.svelte-1i48nut .black .links a.svelte-1i48nut{flex-basis:50%;text-align:center}}footer.svelte-1i48nut .white.svelte-1i48nut{background-color:#F5F5F5;display:flex;justify-content:center;align-items:center;font-family:"Poppins-Light";font-size:1rem;color:#575757}@media only screen and (max-width: 960px){footer.svelte-1i48nut .white.svelte-1i48nut{justify-content:space-between;margin:0 16px}}footer.svelte-1i48nut .white a.svelte-1i48nut{padding:8px 16px;color:#575757;text-decoration:none}@media only screen and (max-width: 960px){footer.svelte-1i48nut .white a.svelte-1i48nut{padding:8px 0}}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-1i48nut" data-svelte-h="svelte-slr698"><div class="black svelte-1i48nut"><a class="logo svelte-1i48nut" href="/"><img alt="logo menu" src="/images/logo-menu-black.svg" class="svelte-1i48nut"></a> <div class="links svelte-1i48nut"><a href="/agence" class="svelte-1i48nut">Agence</a> <a href="/actualites" class="svelte-1i48nut">Actualités</a> <a href="/expertises" class="svelte-1i48nut">Expertises</a> <a href="/contact" class="svelte-1i48nut">Contact</a> <a href="/projets" class="svelte-1i48nut">Projets</a> <a href="/presse" class="svelte-1i48nut">Espace presse</a></div></div> <div class="white svelte-1i48nut"><a href="/mentions" class="svelte-1i48nut">Mentions légales</a>
		-
		<a href="/donnees-personelles" class="svelte-1i48nut">Données personnelles</a>
		-
		<a class="svelte-1i48nut">Préférence cookies</a></div> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let animations;
  let smoothScroll;
  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        smoothScroll.scrollTop(0);
        resolve();
        await navigation.complete;
        animations.refresh();
      });
    });
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-17oj097_START --><link rel="icon"${add_attribute("href", $page.data.icon || "/favicon.png", 0)}>${$$result.title = `<title>${escape($page.data.title || "Selte Begins")}</title>`, ""}<!-- HEAD_svelte-17oj097_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="app" id="smooth-wrapper"><div id="smooth-content"><main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div> ${validate_component(Animations, "Animations").$$render(
      $$result,
      { methods: animations },
      {
        methods: ($$value) => {
          animations = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-c979048b.js.map
