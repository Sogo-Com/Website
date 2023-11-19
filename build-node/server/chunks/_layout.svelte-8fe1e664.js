import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from './index3-560a1835.js';
import { p as page } from './stores-da6e2aaa.js';
import ScrollSmoother from 'gsap/dist/ScrollSmoother.js';
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
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}h1[animate],h2[animate]{opacity:0;visibility:hidden}',
  map: null
};
const Animations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const timelines = {};
  const localMethods = {
    h1: () => {
      const selector = "h1";
      const Elems = document.querySelectorAll(`${selector}[animate]`);
      if (timelines[selector] == null)
        timelines[selector] = [];
      Elems?.forEach((Elem) => {
        const splited = new SplitText(Elem, { type: "words,chars,lines" });
        let timeline = gsap.timeline({
          onComplete: () => {
            splited.revert();
          }
        });
        timeline.to(Elem, { autoAlpha: 1, duration: 0 });
        timeline.fromTo(splited.chars, { y: 10, autoAlpha: 0 }, {
          delay: 0.5,
          stagger: 0.03,
          duration: 0.05,
          y: 0,
          autoAlpha: 1
        });
        timelines[selector].push(timeline);
      });
    },
    h2: () => {
      const selector = "h2";
      const Elems = document.querySelectorAll(`${selector}[animate]`);
      if (timelines[selector] == null)
        timelines[selector] = [];
      Elems?.forEach((Elem) => {
        const props = {
          start: "top 70%",
          end: "bottom 70%"
        };
        const splited = new SplitText(Elem, { type: "words,chars,lines" });
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: Elem,
            start: props.start,
            end: props.end
          },
          onComplete: () => {
            splited.revert();
          }
        });
        timeline.to(Elem, { autoAlpha: 1, duration: 0 });
        timeline.fromTo(splited.chars, { y: 10, autoAlpha: 0 }, {
          stagger: 0.03,
          duration: 0.05,
          y: 0,
          autoAlpha: 1
        });
        timelines[selector].push(timeline);
      });
    },
    h3: () => {
      const selector = "h3";
      const Elems = document.querySelectorAll(`${selector}[animate]`);
      if (timelines[selector] == null)
        timelines[selector] = [];
      Elems?.forEach((Elem) => {
        const props = {
          start: "top 70%",
          end: "bottom 70%"
        };
        const splited = new SplitText(Elem, { type: "words,chars,lines" });
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: Elem,
            start: props.start,
            end: props.end
          },
          onComplete: () => {
            splited.revert();
          }
        });
        timeline.to(Elem, { autoAlpha: 1, duration: 0 });
        timeline.fromTo(splited.chars, { y: 10, autoAlpha: 0 }, {
          stagger: 0.03,
          duration: 0.05,
          y: 0,
          autoAlpha: 1
        });
        timelines[selector].push(timeline);
      });
    },
    p: () => {
      const selector = "p";
      const Elems = document.querySelectorAll(`${selector}[animate]`);
      if (timelines[selector] == null)
        timelines[selector] = [];
      Elems?.forEach((Elem) => {
        const props = {
          start: "top 70%",
          end: "bottom 70%"
        };
        const splited = new SplitText(Elem, { type: "words,chars,lines" });
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: Elem,
            start: props.start,
            end: props.end,
            scrub: true
          },
          onComplete: () => {
            splited.revert();
          }
        });
        timeline.fromTo(splited.lines, { y: 10, opacity: 0 }, {
          stagger: 0.03,
          duration: 0.05,
          y: 0,
          opacity: 1
        });
        timelines[selector].push(timeline);
      });
    },
    btn: () => {
      const selector = ".btn";
      const Elems = document.querySelectorAll(`${selector}[animate]`);
      if (timelines[selector] == null)
        timelines[selector] = [];
      Elems?.forEach((Elem) => {
        const props = {
          start: "top 80%",
          end: "bottom 80%"
        };
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: Elem,
            start: props.start,
            end: props.end
          }
        });
        timeline.fromTo(
          Elem,
          {
            y: 10,
            opacity: 0,
            delay: 0,
            duration: 0.3
          },
          { y: 0, opacity: 1 }
        );
        timelines[selector].push(timeline);
      });
    },
    friseHistoire: () => {
      const selector = ".frise";
      const Elems = document.querySelectorAll(`${selector}[animate]`);
      if (timelines[selector] == null)
        timelines[selector] = [];
      const isMobile = window.matchMedia("(max-width:960px)").matches;
      Elems?.forEach((Elem) => {
        const pointsElems = document.querySelectorAll(".point");
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: Elem,
            start: "center center",
            end: "+=1300px",
            pin: true,
            pinSpacing: true,
            scrub: true
          }
        });
        const props = {
          x: isMobile ? 0 : -50,
          y: isMobile ? -50 : 0
        };
        pointsElems?.forEach((pointElem) => {
          timeline.fromTo(pointElem, { opacity: 0, x: props.x, y: props.y }, { opacity: 1, x: 0, y: 0 });
        });
        timelines[selector].push(timeline);
      });
    }
  };
  const methods = {
    load: () => {
      localMethods.h1();
      localMethods.h2();
      localMethods.h3();
      localMethods.p();
      localMethods.btn();
      localMethods.friseHistoire();
    },
    refresh: () => {
      Object.keys(timelines).forEach((tlKey) => {
        timelines[tlKey]?.forEach((timeline) => {
          setTimeout((_) => {
            tl.refresh();
          });
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
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}#navContainer{position:fixed;top:0;background-color:#fff;width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;padding:32px 0;z-index:100}@media only screen and (max-width: 960px){#navContainer{padding:16px 0}}#navContainer .menu-container{margin-left:11%;margin-right:11%;width:100%;display:flex;align-items:center}@media only screen and (max-width: 1150px){#navContainer .menu-container{justify-content:space-between}}@media only screen and (max-width: 960px){#navContainer .menu-container{margin-left:5%;margin-right:5%}}#navContainer .menu-container div,#navContainer .menu-container a{text-align:center;text-decoration:none;font-family:"Poppins-Light";color:#575757;font-size:24px}#navContainer .menu-container .logo-menu{display:flex;align-items:start;flex-basis:25%}@media only screen and (max-width: 960px){#navContainer .menu-container .logo-menu{align-items:center;flex-basis:100%}#navContainer .menu-container .logo-menu img{height:70%}}#navContainer .menu-container .menu{flex-basis:50%;display:flex;align-items:center}@media only screen and (max-width: 1150px){#navContainer .menu-container .menu{position:absolute;top:100%;width:100%;display:block;overflow:hidden;height:0;background-color:#fff;left:0}#navContainer .menu-container .menu .links{flex-direction:column}#navContainer .menu-container .menu .links a{padding:16px 0}#navContainer .menu-container .menu .presse{padding:16px 0;background-color:#DDB0AF}}#navContainer .menu-container .links{flex-grow:2}#navContainer .menu-container .links a{transition:0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);padding:16px;font-family:"Poppins-Medium"}#navContainer .menu-container .links a:hover{color:#DDB0AF}#navContainer .menu-container .links .mobile{color:#fff !important;width:-webkit-fill-available;justify-content:center;display:none}@media only screen and (max-width: 1150px){#navContainer .menu-container .links .mobile{display:flex}}#navContainer .menu-container .links .active{font-family:"Poppins-SemiBold";text-decoration:underline;color:#DDB0AF;text-underline-offset:20px}#navContainer .menu-container .presse{display:flex;justify-content:end;align-items:center;flex-basis:25%}@media only screen and (max-width: 1150px){#navContainer .menu-container .presse{display:none}}#navContainer .menu-container .presse .btn-container{width:fit-content;display:inline;display:inline-block;flex-grow:initial}#navContainer .menu-container .presse .btn-container .btn{background-color:#DDB0AF;width:fit-content;display:block;padding:10px 32px;border-radius:32px;color:#F5F5F5;font-size:24px}#navContainer .menu-container .mobile-btn{height:fit-content;transition:cubic-bezier(0.39, 0.575, 0.565, 1) all 0.3s;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;cursor:pointer}@media only screen and (min-width: 1150px){#navContainer .menu-container .mobile-btn{display:none}}#navContainer .menu-container .mobile-btn :nth-child(1){bottom:0px}#navContainer .menu-container .mobile-btn :nth-child(3){top:0px}#navContainer .menu-container .mobile-btn.active :nth-child(1){transform:rotate(45deg) translate(3px);bottom:0px !important}@media only screen and (max-width: 960px){#navContainer .menu-container .mobile-btn.active :nth-child(1){transform:rotate(45deg) translate(-3px)}}#navContainer .menu-container .mobile-btn.active :nth-child(2){opacity:0}#navContainer .menu-container .mobile-btn.active :nth-child(3){transform:rotate(-45deg);top:0px !important}@media only screen and (max-width: 960px){#navContainer .menu-container .mobile-btn.active :nth-child(3){transform:rotate(-45deg) translate(-3px)}}#navContainer .menu-container .mobile-btn span{transform-origin:left;transition:0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);display:block;height:3px;margin:8px 16px;width:50px;position:relative;background-color:#DDB0AF}@media only screen and (max-width: 960px){#navContainer .menu-container .mobile-btn span{width:40px;margin:4px 0px}}#navContainer .menu-container .mobile-btn:hover :nth-child(1){bottom:-5px}#navContainer .menu-container .mobile-btn:hover :nth-child(3){top:-5px}',
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
  $$result.css.add(css$1);
  return `<div id="navContainer"><div class="menu-container"><a class="logo-menu" href="/"${add_attribute("this", logo, 0)}><img alt="logo menu" src="/images/logo-menu.svg"></a>

		<div class="menu"${add_attribute("this", menu, 0)}><div class="links"${add_attribute("this", links, 0)}><a href="/agence">Agence
				</a>
				<a href="/expertises">Expertises
				</a>
				<a href="/projets">Projets
				</a>
				<a href="/actualites">Actualites
				</a>
				<a href="/contact">Contact
				</a>

				<a class="mobile presse" href="/presse">Espace Presse </a></div></div>
		<div class="presse"><a href="/presse"><div class="btn-container"><div class="btn">Espace Presse</div></div></a></div>

		<div class="mobile-btn"${add_attribute("this", mobileBtn, 0)}><span class="mob-1"></span>
			<span class="mob-2"></span>
			<span class="mob-3"></span></div></div>
</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</header>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}footer.svelte-1jqfx0p .black.svelte-1jqfx0p{background-color:#575757;display:flex;justify-content:space-between;align-items:center;padding:32px 11%}@media only screen and (max-width: 960px){footer.svelte-1jqfx0p .black.svelte-1jqfx0p{flex-direction:column-reverse}}footer.svelte-1jqfx0p .black .logo.svelte-1jqfx0p{display:flex;justify-content:start;align-items:center;flex-basis:33.3%}footer.svelte-1jqfx0p .black .logo img.svelte-1jqfx0p{width:80%;height:50%}@media only screen and (max-width: 960px){footer.svelte-1jqfx0p .black .logo.svelte-1jqfx0p{margin-bottom:32px}}footer.svelte-1jqfx0p .black .links.svelte-1jqfx0p{flex-basis:33.3%;display:flex;flex-direction:row;flex-wrap:wrap}@media only screen and (max-width: 960px){footer.svelte-1jqfx0p .black .links.svelte-1jqfx0p{margin-bottom:32px}}footer.svelte-1jqfx0p .black .links a.svelte-1jqfx0p{flex-basis:50%;font-family:"Poppins-Light";font-size:1rem;color:#F5F5F5;text-decoration:none;padding:16px 0}@media only screen and (max-width: 960px){footer.svelte-1jqfx0p .black .links a.svelte-1jqfx0p{flex-basis:50%;text-align:center}}footer.svelte-1jqfx0p .white.svelte-1jqfx0p{background-color:#F5F5F5;display:flex;justify-content:center;align-items:center;font-family:"Poppins-Light";font-size:1rem;color:#575757}@media only screen and (max-width: 960px){footer.svelte-1jqfx0p .white.svelte-1jqfx0p{justify-content:space-between;margin:0 16px}}footer.svelte-1jqfx0p .white a.svelte-1jqfx0p{padding:8px 16px;color:#575757;text-decoration:none}@media only screen and (max-width: 960px){footer.svelte-1jqfx0p .white a.svelte-1jqfx0p{padding:8px 0}}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-1jqfx0p"><div class="black svelte-1jqfx0p"><a class="logo svelte-1jqfx0p" href="/"><img alt="logo menu" src="/images/logo-menu-black.svg" class="svelte-1jqfx0p"></a>
		<div class="links svelte-1jqfx0p"><a href="/agence" class="svelte-1jqfx0p">Agence </a>
			<a href="/actualites" class="svelte-1jqfx0p">Actualités </a>
			<a href="/expertises" class="svelte-1jqfx0p">Expertises </a>
			<a href="/contact" class="svelte-1jqfx0p">Contact </a>
			<a href="/projets" class="svelte-1jqfx0p">Projets </a>

			<a href="/presse" class="svelte-1jqfx0p">Espace presse </a></div></div>
	<div class="white svelte-1jqfx0p"><a href="/mentions" class="svelte-1jqfx0p">Mentions légales </a>
		-
		<a href="/donnees-personelles" class="svelte-1jqfx0p">Données personnelles </a>
		-
		<a class="svelte-1jqfx0p">Préférence cookies </a></div>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let animations;
  let smoothScroll;
  function loadSmoothScroll() {
    smoothScroll?.scrollTop(0);
    smoothScroll?.kill();
    smoothScroll = ScrollSmoother.create({
      autoResize: true,
      // automatically call update() when window is resized
      smooth: 1,
      effects: true
      // looks for data-speed and data-lag attributes on elements
    });
  }
  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
        animations.load();
        loadSmoothScroll();
      });
    });
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-17oj097_START --><link rel="icon"${add_attribute("href", $page.data.icon || "/favicon.png", 0)}>${$$result.title = `<title>${escape($page.data.title || "Selte Begins")}</title>`, ""}<!-- HEAD_svelte-17oj097_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="app" id="smooth-wrapper"><div id="smooth-content"><main>${slots.default ? slots.default({}) : ``}</main>

		${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>


${validate_component(Animations, "Animations").$$render(
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
//# sourceMappingURL=_layout.svelte-8fe1e664.js.map
