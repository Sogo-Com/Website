import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from './ssr-28b17f7a.js';
import { p as page } from './stores-2b0c827c.js';
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
const css$3 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:360px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 360px){:root{font-size:10px}}h1:not([data-noamin]), :global(.noanim),h2:not([data-noamin]), :global(.noanim),h3:not([data-noamin]), :global(.noanim){opacity:0;visibility:hidden}',
  map: null
};
const Animations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const timelines = [];
  const methods = {
    load: () => {
      const noanim = ":not([data-noamin],.noanim)";
      const isMedia = window.matchMedia("(max-width:1150px)").matches;
      document.querySelectorAll("h1")?.forEach((elem) => {
        const splited = new SplitText(elem, { type: "words,chars,lines" });
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
        const splited = new SplitText(elem, { type: "words,chars,lines" });
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
        timelines.push(tl);
      });
      document.querySelectorAll(".app .btn")?.forEach((button) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: button,
            start: "top 90%",
            end: "bottom 90%",
            scrub: false,
            once: true
          }
        });
        tl.fromTo(button, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1 });
        timelines.push(tl);
      });
      document.querySelectorAll(".app p")?.forEach((paragraph) => {
        const props = {
          start: isMedia ? "top 90%" : "top 80%",
          end: isMedia ? "bottom 90%" : "bottom 80%",
          stagger: isMedia ? 0.01 : 0.02
        };
        const splited = new SplitText(paragraph, { type: "lines,words,chars" });
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: paragraph,
            start: props.start,
            end: props.end,
            scrub: false
          }
          //once:true,
        });
        tl.fromTo(splited.lines, { y: 10, x: -10, autoAlpha: 0 }, {
          stagger: props.stagger,
          duration: 0.05,
          y: 0,
          x: 0,
          autoAlpha: 1
        });
        timelines.push(tl);
      });
    },
    refresh: () => {
      if (timelines.length > 0) {
        timelines.forEach((tl) => {
          tl.restart();
        });
      }
    }
  };
  if ($$props.methods === void 0 && $$bindings.methods && methods !== void 0)
    $$bindings.methods(methods);
  $$result.css.add(css$3);
  return ``;
});
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:360px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 360px){:root{font-size:10px}}#navContainer{position:fixed;top:0;background-color:#fff;width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;padding:32px 0;z-index:100}@media only screen and (max-width: 960px){#navContainer{padding:16px 0}}#navContainer .menu-container{margin-left:11%;margin-right:11%;width:100%;display:flex;align-items:center}@media only screen and (max-width: 1150px){#navContainer .menu-container{justify-content:space-between}}@media only screen and (max-width: 960px){#navContainer .menu-container{margin-left:5%;margin-right:5%}}#navContainer .menu-container div,#navContainer .menu-container a{text-align:center;text-decoration:none;font-family:"Poppins-Light";color:#575757;font-size:24px}#navContainer .menu-container .logo-menu{display:flex;align-items:start;flex-basis:25%}@media only screen and (max-width: 960px){#navContainer .menu-container .logo-menu{align-items:center;flex-basis:100%}#navContainer .menu-container .logo-menu img{height:70%}}#navContainer .menu-container .menu{flex-basis:50%;display:flex;align-items:center}@media only screen and (max-width: 1150px){#navContainer .menu-container .menu{position:absolute;top:100%;width:100%;display:block;overflow:hidden;height:0;background-color:#fff;left:0}#navContainer .menu-container .menu .links{flex-direction:column}#navContainer .menu-container .menu .links a{padding:16px 0}#navContainer .menu-container .menu .presse{padding:16px 0;background-color:#DDB0AF}}#navContainer .menu-container .links{flex-grow:2}#navContainer .menu-container .links a{transition:0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);padding:16px;font-family:"Poppins-Medium"}#navContainer .menu-container .links a:hover{color:#DDB0AF}#navContainer .menu-container .links .mobile{color:#fff !important;width:-webkit-fill-available;justify-content:center;display:none}@media only screen and (max-width: 1150px){#navContainer .menu-container .links .mobile{display:flex}}#navContainer .menu-container .links .active{font-family:"Poppins-SemiBold";text-decoration:underline;color:#DDB0AF;text-underline-offset:20px}#navContainer .menu-container .presse{display:flex;justify-content:end;align-items:center;flex-basis:25%}@media only screen and (max-width: 1150px){#navContainer .menu-container .presse{display:none}}#navContainer .menu-container .presse .btn-container{width:fit-content;display:inline;display:inline-block;flex-grow:initial}#navContainer .menu-container .presse .btn-container .btn{background-color:#DDB0AF;width:fit-content;display:block;padding:10px 32px;border-radius:32px;color:#F5F5F5;font-size:24px}#navContainer .menu-container .mobile-btn{height:fit-content;transition:cubic-bezier(0.39, 0.575, 0.565, 1) all 0.3s;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;cursor:pointer}@media only screen and (min-width: 1150px){#navContainer .menu-container .mobile-btn{display:none}}#navContainer .menu-container .mobile-btn :nth-child(1){bottom:0px}#navContainer .menu-container .mobile-btn :nth-child(3){top:0px}#navContainer .menu-container .mobile-btn.active :nth-child(1){transform:rotate(45deg) translate(3px);bottom:0px !important}@media only screen and (max-width: 960px){#navContainer .menu-container .mobile-btn.active :nth-child(1){transform:rotate(45deg) translate(-3px)}}#navContainer .menu-container .mobile-btn.active :nth-child(2){opacity:0}#navContainer .menu-container .mobile-btn.active :nth-child(3){transform:rotate(-45deg);top:0px !important}@media only screen and (max-width: 960px){#navContainer .menu-container .mobile-btn.active :nth-child(3){transform:rotate(-45deg) translate(-3px)}}#navContainer .menu-container .mobile-btn span{transform-origin:left;transition:0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);display:block;height:3px;margin:8px 16px;width:50px;position:relative;background-color:#DDB0AF}@media only screen and (max-width: 960px){#navContainer .menu-container .mobile-btn span{width:40px;margin:4px 0px}}#navContainer .menu-container .mobile-btn:hover :nth-child(1){bottom:-5px}#navContainer .menu-container .mobile-btn:hover :nth-child(3){top:-5px}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links;
  let logo;
  let menu;
  let mobileBtn;
  onNavigate(({ to }) => {
    const { url } = to;
    checkLinks(url);
  });
  function checkLinks(url) {
    const linkChilds = Array.from(links.children);
    if (linkChilds.length != 0 && url != null) {
      linkChilds.forEach((link) => {
        link.classList.remove("active");
        const linkUrl = new URL(link.href);
        if (url.pathname == linkUrl.pathname)
          link.classList.add("active");
      });
    }
  }
  $$result.css.add(css$2);
  return `<div id="navContainer"><div class="menu-container"><a class="logo-menu" href="/"${add_attribute("this", logo, 0)} data-svelte-h="svelte-1ddonh5"><img alt="logo menu" src="/images/logo-menu.svg"></a> <div class="menu"${add_attribute("this", menu, 0)}><div class="links"${add_attribute("this", links, 0)} data-svelte-h="svelte-1ubwlhv"><a href="/agence">Agence</a> <a href="/expertises">Expertises</a> <a href="/projets">Projets</a> <a href="/actualites">Actualites</a> <a href="/contact">Contact</a> <a class="mobile presse" href="/presse">Espace Presse</a></div></div> <div class="presse" data-svelte-h="svelte-1hevrxp"><a href="/presse"><div class="btn-container"><div class="btn">Espace Presse</div></div></a></div> <div class="mobile-btn"${add_attribute("this", mobileBtn, 0)} data-svelte-h="svelte-1effg8u"><span class="mob-1"></span> <span class="mob-2"></span> <span class="mob-3"></span></div></div> </div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
});
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:360px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 360px){:root{font-size:10px}}footer.svelte-1iodng5 .black.svelte-1iodng5{background-color:#575757;display:flex;justify-content:space-between;align-items:center;padding:32px 11%}@media only screen and (max-width: 960px){footer.svelte-1iodng5 .black.svelte-1iodng5{flex-direction:column-reverse}}footer.svelte-1iodng5 .black .logo.svelte-1iodng5{display:flex;justify-content:start;align-items:center;flex-basis:33.3%}footer.svelte-1iodng5 .black .logo img.svelte-1iodng5{width:80%;height:50%}@media only screen and (max-width: 960px){footer.svelte-1iodng5 .black .logo.svelte-1iodng5{margin-bottom:32px}}footer.svelte-1iodng5 .black .links.svelte-1iodng5{flex-basis:33.3%;display:flex;flex-direction:row;flex-wrap:wrap}@media only screen and (max-width: 960px){footer.svelte-1iodng5 .black .links.svelte-1iodng5{margin-bottom:32px}}footer.svelte-1iodng5 .black .links a.svelte-1iodng5{flex-basis:50%;font-family:"Poppins-Light";font-size:1rem;color:#F5F5F5;text-decoration:none;padding:16px 0}@media only screen and (max-width: 960px){footer.svelte-1iodng5 .black .links a.svelte-1iodng5{flex-basis:50%;text-align:center}}footer.svelte-1iodng5 .white.svelte-1iodng5{background-color:#F5F5F5;display:flex;justify-content:center;align-items:center;font-family:"Poppins-Light";font-size:1rem;color:#575757}@media only screen and (max-width: 960px){footer.svelte-1iodng5 .white.svelte-1iodng5{justify-content:space-between;margin:0 16px}}footer.svelte-1iodng5 .white a.svelte-1iodng5{padding:8px 16px;color:#575757;text-decoration:none}@media only screen and (max-width: 960px){footer.svelte-1iodng5 .white a.svelte-1iodng5{padding:8px 0}}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-1iodng5" data-svelte-h="svelte-slr698"><div class="black svelte-1iodng5"><a class="logo svelte-1iodng5" href="/"><img alt="logo menu" src="/images/logo-menu-black.svg" class="svelte-1iodng5"></a> <div class="links svelte-1iodng5"><a href="/agence" class="svelte-1iodng5">Agence</a> <a href="/actualites" class="svelte-1iodng5">Actualités</a> <a href="/expertises" class="svelte-1iodng5">Expertises</a> <a href="/contact" class="svelte-1iodng5">Contact</a> <a href="/projets" class="svelte-1iodng5">Projets</a> <a href="/presse" class="svelte-1iodng5">Espace presse</a></div></div> <div class="white svelte-1iodng5"><a href="/mentions" class="svelte-1iodng5">Mentions légales</a>
		-
		<a href="/donnees-personelles" class="svelte-1iodng5">Données personnelles</a>
		-
		<a class="svelte-1iodng5">Préférence cookies</a></div> </footer>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:360px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 360px){:root{font-size:10px}}main.svelte-148lz0z{min-height:100vh}',
  map: null
};
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
        animations.load();
      });
    });
  });
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-17oj097_START --><link rel="icon"${add_attribute("href", $page.data.icon || "/favicon.png", 0)}>${$$result.title = `<title>${escape($page.data.title || "Selte Begins")}</title>`, ""}<!-- HEAD_svelte-17oj097_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="app" id="smooth-wrapper"><div id="smooth-content"><main class="svelte-148lz0z">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div> ${validate_component(Animations, "Animations").$$render(
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
//# sourceMappingURL=_layout.svelte-d0b1d79c.js.map
