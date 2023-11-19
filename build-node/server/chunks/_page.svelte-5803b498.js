import { c as create_ssr_component, v as validate_component, d as each, b as add_attribute } from './index3-560a1835.js';
import { F as FlipCard } from './FlipCard-0ced05df.js';
import 'swiper';
import 'swiper/modules';

const css$3 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}#valeurs.svelte-qgwyg6.svelte-qgwyg6{background-color:#fcf7f7;padding-bottom:64px}@media only screen and (max-width: 960px){#valeurs.svelte-qgwyg6.svelte-qgwyg6{margin:0;padding:0 12px}}#valeurs.svelte-qgwyg6 h2.svelte-qgwyg6{padding:64px 11% 0 11%}@media only screen and (max-width: 960px){#valeurs.svelte-qgwyg6 h2.svelte-qgwyg6{margin:0;padding:0;padding-top:32px;width:100%;text-align:center;display:flex;justify-content:center;align-items:center}}#valeurs.svelte-qgwyg6 .conteneur.svelte-qgwyg6{padding:0 11%;display:flex;flex-direction:row;justify-content:space-around;align-items:center;flex-wrap:wrap}@media only screen and (max-width: 960px){#valeurs.svelte-qgwyg6 .conteneur.svelte-qgwyg6{padding:0;padding-bottom:32px}#valeurs.svelte-qgwyg6 .conteneur :first-child p.svelte-qgwyg6{height:auto !important}}#valeurs.svelte-qgwyg6 .conteneur .contenu.svelte-qgwyg6{flex-basis:26%;display:flex;justify-content:center;align-items:center;flex-grow:1}#valeurs.svelte-qgwyg6 .conteneur .contenu.right.svelte-qgwyg6{justify-content:end}#valeurs.svelte-qgwyg6 .conteneur .contenu.left.svelte-qgwyg6{justify-content:start}@media only screen and (max-width: 1150px){#valeurs.svelte-qgwyg6 .conteneur .contenu.svelte-qgwyg6{flex-basis:35%;margin:32px 0}}@media only screen and (max-width: 960px){#valeurs.svelte-qgwyg6 .conteneur .contenu.svelte-qgwyg6{flex-basis:50%}}#valeurs.svelte-qgwyg6 .conteneur .contenu p.svelte-qgwyg6{font-size:1rem;line-height:1rem;width:100% !important}@media only screen and (max-width: 960px){#valeurs.svelte-qgwyg6 .conteneur .contenu p.svelte-qgwyg6{width:100% !important;margin-bottom:12px}}#valeurs.svelte-qgwyg6 .conteneur .contenu .flip.svelte-qgwyg6{margin:15% 0;width:20vw;height:20vw}@media only screen and (max-width: 1150px){#valeurs.svelte-qgwyg6 .conteneur .contenu .flip.svelte-qgwyg6{width:30vw;height:30vw;margin:auto}}@media only screen and (max-width: 960px){#valeurs.svelte-qgwyg6 .conteneur .contenu .flip.svelte-qgwyg6{width:70vw;height:70vw;margin:12px auto}}',
  map: null
};
const Valeurs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div id="valeurs" class="svelte-qgwyg6"><h2 animate class="svelte-qgwyg6"><span class="pink">Nos Valeurs</span></h2>
	<div class="conteneur svelte-qgwyg6"><div class="contenu left svelte-qgwyg6"><p animate class="flip svelte-qgwyg6">Créative et inspirée, l’équipe Sogo Com c’est aussi un lien de proximité assuré.
				<br><br>
				Basée à Poisy, aux portes d’Annecy, la team expérimentée défend son système de valeurs coûte
				que coûte.
				<br><br>
				L’éthique et l’écoute pour la finesse de l’intention, la confiance et le conseil pour la justesse
				de la relation.
			</p></div>
		<div class="contenu center svelte-qgwyg6"><div class="flip svelte-qgwyg6">${validate_component(FlipCard, "FlipCard").$$render($$result, { titre: "Bienveillance" }, {}, {})}</div></div>

		<div class="contenu right svelte-qgwyg6"><div class="flip svelte-qgwyg6">${validate_component(FlipCard, "FlipCard").$$render(
    $$result,
    {
      titre: "Éthique",
      description: "« L’éthique c’est l’esthétique de dedans », Pierre Reverdy. \n\n				Mettre en adéquation nos actions et nos valeurs, injecter de l’humain à tous les temps de la collaboration est une composante essentielle chez Sogo Com. "
    },
    {},
    {}
  )}</div></div>
		<div class="contenu left svelte-qgwyg6"><div class="flip svelte-qgwyg6">${validate_component(FlipCard, "FlipCard").$$render(
    $$result,
    {
      titre: "Confiance",
      description: "« Le meilleur moyen de savoir si vous pouvez faire confiance à quelqu’un c’est de lui faire confiance », Ernest Hemingway. \n\n				Incontournable à toute relation saine et sereine, Sogo Com place la confiance mutuelle comme trait d’union. Elle tisse le lien entre vous et nous. "
    },
    {},
    {}
  )}</div></div>
		<div class="contenu center svelte-qgwyg6"><div class="flip svelte-qgwyg6">${validate_component(FlipCard, "FlipCard").$$render(
    $$result,
    {
      titre: "Conseil",
      description: "« Un bon conseil doit pouvoir être conjugué à la personnalité de l’individu qui le reçoit », Laurent Martinez\n\n				Parce que tout process de projet comprend un principe fondateur et clé de réalité, l’équipe Sogo Com vous éclaire, vous aiguille et vous conseille en toute transparence pour une communication qui vous ressemble. "
    },
    {},
    {}
  )}</div></div>
		<div class="contenu right svelte-qgwyg6"><div class="flip svelte-qgwyg6">${validate_component(FlipCard, "FlipCard").$$render($$result, { titre: "Bienveillance" }, {}, {})}</div></div></div>
</div>`;
});
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}#histoire.svelte-sxjtz8.svelte-sxjtz8{background:#fff}@media only screen and (max-width: 1150px){#histoire.svelte-sxjtz8 .h2-seo.svelte-sxjtz8{padding-bottom:32px}}@media only screen and (max-width: 1150px){#histoire.svelte-sxjtz8 .h2-seo h2.svelte-sxjtz8{margin-bottom:0}}#histoire.blanc.svelte-sxjtz8.svelte-sxjtz8{padding:6rem 0;position:relative;overflow:hidden}@media only screen and (max-width: 960px){#histoire.blanc.svelte-sxjtz8.svelte-sxjtz8{padding:32px 12px 0 12px}}#histoire.blanc.svelte-sxjtz8 .wrapper.svelte-sxjtz8{display:flex;flex-direction:row;flex-wrap:nowrap;position:relative;left:22%}@media only screen and (max-width: 960px){#histoire.blanc.svelte-sxjtz8 .wrapper.svelte-sxjtz8{left:unset;padding:0}}#histoire.svelte-sxjtz8 .frise.svelte-sxjtz8{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;height:450px;width:100%}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise.svelte-sxjtz8{flex-direction:column;align-items:start;height:calc(60vw + 200px)}}#histoire.svelte-sxjtz8 .frise .point.svelte-sxjtz8{position:relative;left:var(--esp);z-index:var(--index);color:#F5F5F5;width:50px;height:50px;border-radius:50px;background-color:#DDB0AF;display:flex;justify-content:center;align-items:center}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise .point.svelte-sxjtz8{left:unset;top:var(--esp)}}#histoire.svelte-sxjtz8 .frise .point .innerStartLine.svelte-sxjtz8{position:absolute;width:var(--line);height:2px;background-color:#000;top:50%;right:100%}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise .point .innerStartLine.svelte-sxjtz8{width:1px;height:var(--line);top:unset;bottom:100%;right:50%}}#histoire.svelte-sxjtz8 .frise .point .innerEndLine.svelte-sxjtz8{position:absolute;width:var(--endline);height:0px;border:none;border-top:1px dashed #000;border-bottom:1px dashed #000;top:50%;left:100%}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise .point .innerEndLine.svelte-sxjtz8{transform:rotate(90deg);transform-origin:left;top:100%;left:50%}}#histoire.svelte-sxjtz8 .frise .point .innerText.svelte-sxjtz8{font-family:"Poppins-Light";font-size:0.8rem}#histoire.svelte-sxjtz8 .frise .point .innerPoint.svelte-sxjtz8{padding:16px;position:absolute;text-align:right;right:calc(100% - 68px)}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise .point .innerPoint.svelte-sxjtz8{padding:0 32px;width:80vw}}#histoire.svelte-sxjtz8 .frise .point .innerPoint h3.svelte-sxjtz8{margin-bottom:8px;text-align:right;color:#000}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise .point .innerPoint h3.svelte-sxjtz8{width:100%;text-align:left}}#histoire.svelte-sxjtz8 .frise .point .innerPoint p.svelte-sxjtz8{width:20vw;font-size:0.8rem}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise .point .innerPoint p.svelte-sxjtz8{width:100%;text-align:left;line-height:16px}}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise .point .innerPoint.svelte-sxjtz8{left:100%}}#histoire.svelte-sxjtz8 .frise .point .innerPoint.bottom.svelte-sxjtz8{top:100%}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise .point .innerPoint.bottom.svelte-sxjtz8{top:unset}}#histoire.svelte-sxjtz8 .frise .point .innerPoint.top.svelte-sxjtz8{bottom:100%}@media only screen and (max-width: 960px){#histoire.svelte-sxjtz8 .frise .point .innerPoint.top.svelte-sxjtz8{bottom:unset}}',
  map: null
};
const FriseHistoire = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="histoire" class="blanc svelte-sxjtz8"><div class="h2-seo end svelte-sxjtz8"><h2 animate class="svelte-sxjtz8"><span class="pink">Notre histoire</span></h2>
		<p class="svelte-sxjtz8">Phrase très courte avec les mots clé pour SEO</p></div>

	<div class="wrapper svelte-sxjtz8"><div animate class="frise svelte-sxjtz8"><div style="--esp:0; --line:0; --index:4;" class="point svelte-sxjtz8"><div class="innerText svelte-sxjtz8">2010</div>
				<div class="innerStartLine svelte-sxjtz8"></div>
				<div class="innerEndLine svelte-sxjtz8"></div>
				<div class="innerPoint top svelte-sxjtz8"><h3 class="svelte-sxjtz8">Lancement</h3>
					<p class="svelte-sxjtz8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis
						orci at luctus.
					</p></div></div>

			<div style="--esp:15vw; --line:15vw; --index:3;" class="point svelte-sxjtz8"><div class="innerText svelte-sxjtz8">2010</div>
				<div class="innerStartLine svelte-sxjtz8"></div>
				<div class="innerEndLine svelte-sxjtz8"></div>
				<div class="innerPoint bottom svelte-sxjtz8"><h3 class="svelte-sxjtz8">Lancement</h3>
					<p class="svelte-sxjtz8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis
						orci at luctus.
					</p></div></div>
			<div style="--esp:30vw; --line:15vw; --index:2;" class="point svelte-sxjtz8"><div class="innerText svelte-sxjtz8">2010</div>
				<div class="innerStartLine svelte-sxjtz8"></div>
				<div class="innerEndLine svelte-sxjtz8"></div>
				<div class="innerPoint top svelte-sxjtz8"><h3 class="svelte-sxjtz8">Lancement</h3>
					<p class="svelte-sxjtz8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque facilisis
						orci at luctus.
					</p></div></div>

			<div style="--esp:45vw; --line:15vw; --endline:40vw; --index:1;" class="point svelte-sxjtz8"><div class="innerText svelte-sxjtz8">2010</div>
				<div class="innerStartLine svelte-sxjtz8"></div>
				<div class="innerEndLine svelte-sxjtz8"></div>
				<div class="innerPoint bottom svelte-sxjtz8"><h3 class="svelte-sxjtz8">Lancement</h3>
					<p class="svelte-sxjtz8">Le meilleur reste à venir...</p></div></div></div></div>
</div>`;
});
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}.collaborateurs.svelte-1ft5w1f.svelte-1ft5w1f{overflow:hidden}.collaborateurs.svelte-1ft5w1f .info.svelte-1ft5w1f{display:flex;justify-content:center;align-items:center;padding:64px}@media only screen and (max-width: 960px){.collaborateurs.svelte-1ft5w1f .info.svelte-1ft5w1f{padding:32px 8px}}.collaborateurs.svelte-1ft5w1f .info .collaborateur-info.svelte-1ft5w1f{width:60%;display:flex;justify-content:center;align-items:center;flex-direction:column}.collaborateurs.svelte-1ft5w1f .info .collaborateur-info h2.svelte-1ft5w1f{margin-bottom:8px}.collaborateurs.svelte-1ft5w1f .info .collaborateur-info h3.svelte-1ft5w1f{font-family:"Poppins-Light";font-size:1rem}.collaborateurs.svelte-1ft5w1f .info .collaborateur-info p.svelte-1ft5w1f{font-size:0.8rem}.collaborateurs.svelte-1ft5w1f .h2-seo.svelte-1ft5w1f{padding:64px}@media only screen and (max-width: 960px){.collaborateurs.svelte-1ft5w1f .h2-seo.svelte-1ft5w1f{padding:32px;margin:0}}.collaborateurs.svelte-1ft5w1f .h2-seo h2.svelte-1ft5w1f{font-size:4rem}@media only screen and (max-width: 960px){.collaborateurs.svelte-1ft5w1f .h2-seo h2.svelte-1ft5w1f{font-size:2.5rem}}.collaborateurs.svelte-1ft5w1f .swiper-collaborateur.svelte-1ft5w1f{width:100%;display:flex;justify-content:center;align-items:center}.collaborateurs.svelte-1ft5w1f .swiper-collaborateur .swiper-container.svelte-1ft5w1f{width:100%;height:40vh;overflow:visible}.collaborateurs.svelte-1ft5w1f .swiper-collaborateur .swiper-container .swiper-wrapper .swiper-slide.svelte-1ft5w1f{cursor:pointer;transition:all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);padding:64px}@media only screen and (max-width: 960px){.collaborateurs.svelte-1ft5w1f .swiper-collaborateur .swiper-container .swiper-wrapper .swiper-slide.svelte-1ft5w1f{font-size:2.5rem}}.collaborateurs.svelte-1ft5w1f .swiper-collaborateur .swiper-container .swiper-wrapper .swiper-slide img.svelte-1ft5w1f{width:100%;height:100%;object-fit:contain;-webkit-mask-image:url("/images/bubble-mask.svg");mask-image:url("/images/bubble-mask.svg");-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}',
  map: null
};
const SliderGomettes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { collaborateurs } = $$props;
  let prenom;
  let descriptionCourte;
  let description;
  collaborateurs?.sort((a, b) => a.rang - b.rang).forEach((collaborateur, index) => {
    collaborateur.partialId = index;
  });
  if ($$props.collaborateurs === void 0 && $$bindings.collaborateurs && collaborateurs !== void 0)
    $$bindings.collaborateurs(collaborateurs);
  $$result.css.add(css$1);
  return `${collaborateurs != null && collaborateurs.length != 0 ? `<div class="collaborateurs svelte-1ft5w1f"><div class="h2-seo center svelte-1ft5w1f"><h2 animate class="svelte-1ft5w1f"><span class="pink">Les Gommettes</span></h2>
		<p class="svelte-1ft5w1f">Phrase très courte avec les mots clé pour SEO</p></div>

	<div class="swiper-collaborateur svelte-1ft5w1f"><div class="swiper-container svelte-1ft5w1f"><div class="swiper-wrapper">${each(collaborateurs, (collaborateur, index) => {
    return `<div class="swiper-slide svelte-1ft5w1f"${add_attribute("data-collaborateur", collaborateur.partialId, 0)}><img${add_attribute("src", collaborateur.photoInactive, 0)}${add_attribute("alt", collaborateur.prenom, 0)} class="svelte-1ft5w1f">
                    </div>`;
  })}</div></div></div>

    <div class="info svelte-1ft5w1f"><div class="collaborateur-info svelte-1ft5w1f"><h2 animate class="svelte-1ft5w1f"><span class="pink"${add_attribute("this", prenom, 0)}></span></h2>
            <h3 animate class="svelte-1ft5w1f"${add_attribute("this", descriptionCourte, 0)}></h3>
            <p animate class="svelte-1ft5w1f"${add_attribute("this", description, 0)}></p></div></div></div>` : ``}`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}#top.svelte-725gb3.svelte-725gb3.svelte-725gb3{height:100vh;width:100%;overflow:hidden;position:relative;display:flex;justify-content:start;align-items:end}@media only screen and (max-width: 960px){#top.svelte-725gb3.svelte-725gb3.svelte-725gb3{align-items:end;height:50vh}}#top.svelte-725gb3 img.svelte-725gb3.svelte-725gb3{width:100%;height:100%;position:absolute;top:0;z-index:10;background-size:cover;object-fit:cover}#top.svelte-725gb3 h1.svelte-725gb3.svelte-725gb3{text-align:left;padding:10rem}@media only screen and (max-width: 960px){#top.svelte-725gb3 h1.svelte-725gb3.svelte-725gb3{padding:64px 8px;width:100%;text-align:center}}#top.svelte-725gb3 h1 .pink.svelte-725gb3.svelte-725gb3{color:#DDB0AF}#guillemets.svelte-725gb3.svelte-725gb3.svelte-725gb3{background-color:#fff}@media only screen and (max-width: 960px){#guillemets.svelte-725gb3.svelte-725gb3.svelte-725gb3{margin:0;padding:0 12px}}#guillemets.svelte-725gb3 .bloc-container.svelte-725gb3.svelte-725gb3{width:100%;height:100%;display:flex;justify-content:center;align-items:center}@media only screen and (max-width: 960px){#guillemets.svelte-725gb3 .bloc-container.svelte-725gb3.svelte-725gb3{width:100%}}#guillemets.svelte-725gb3 .bloc-container .bloc-seul.svelte-725gb3.svelte-725gb3{width:65%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;flex-wrap:nowrap;position:relative;text-align:center;padding:64px}@media only screen and (max-width: 960px){#guillemets.svelte-725gb3 .bloc-container .bloc-seul.svelte-725gb3.svelte-725gb3{width:100%;padding:16px 0}}#guillemets.svelte-725gb3 .bloc-container .bloc-seul div.svelte-725gb3.svelte-725gb3{margin:16px 0;width:100%;height:100%;display:flex;align-items:center}@media only screen and (max-width: 960px){#guillemets.svelte-725gb3 .bloc-container .bloc-seul div.svelte-725gb3.svelte-725gb3{margin:0}}#guillemets.svelte-725gb3 .bloc-container .bloc-seul div.svelte-725gb3 img.svelte-725gb3{width:100px;height:100px;object-fit:contain}@media only screen and (max-width: 960px){#guillemets.svelte-725gb3 .bloc-container .bloc-seul div.svelte-725gb3 img.svelte-725gb3{width:80px;height:80px}}#guillemets.svelte-725gb3 .bloc-container .bloc-seul .left.svelte-725gb3.svelte-725gb3{justify-content:start}#guillemets.svelte-725gb3 .bloc-container .bloc-seul .center.svelte-725gb3.svelte-725gb3{flex-direction:column;align-items:center;justify-content:center}#guillemets.svelte-725gb3 .bloc-container .bloc-seul .center p.svelte-725gb3.svelte-725gb3{font-size:1.5rem;line-height:32px}@media only screen and (max-width: 960px){#guillemets.svelte-725gb3 .bloc-container .bloc-seul .center p.svelte-725gb3.svelte-725gb3{line-height:normal}}#guillemets.svelte-725gb3 .bloc-container .bloc-seul .right.svelte-725gb3.svelte-725gb3{justify-content:right}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { collaborateurs } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="top" class="svelte-725gb3"><img alt="background-sogo" src="/images/agence-bg.png" class="svelte-725gb3">

	<h1 animate class="svelte-725gb3"><span class="pink svelte-725gb3">Des gommettes</span><br>qui en jettent !</h1></div>

<div id="guillemets" class="svelte-725gb3"><div class="bloc-container svelte-725gb3"><div class="bloc-seul svelte-725gb3"><div class="left svelte-725gb3"><img src="/images/guillemet-gauche.PNG" alt="guillemet gauche" class="svelte-725gb3"></div>
			<div class="center svelte-725gb3"><p animate class="svelte-725gb3">L’équipe Sogo Com a le cœur qui bat au rythme de ses valeurs.
					<br><br>
					Le territoire en étendard, l’expertise en pendentif, touche d’audace et tonalité pulsée,
					nous pensons votre communication
				</p></div>
			<div class="right svelte-725gb3"><img src="/images/guillemet-droit.PNG" alt="guillemet droit" class="svelte-725gb3"></div></div></div></div>
${validate_component(Valeurs, "Valeurs").$$render($$result, {}, {}, {})}
${validate_component(FriseHistoire, "FriseHistoire").$$render($$result, {}, {}, {})}
${validate_component(SliderGomettes, "SliderGomettes").$$render($$result, { collaborateurs }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5803b498.js.map
