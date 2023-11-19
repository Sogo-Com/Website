import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from './index3-560a1835.js';
import 'swiper';
import 'swiper/modules';
import { F as FlipCard } from './FlipCard-0ced05df.js';

const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}form.svelte-17l11bh.svelte-17l11bh{font-family:"Poppins-Light";background:#E1E1E1;border-radius:32px;padding:32px;display:flex;flex-direction:column}form.svelte-17l11bh p.svelte-17l11bh{color:#575757;margin-bottom:32px;font-family:"Poppins-Medium"}form.svelte-17l11bh label.svelte-17l11bh{color:#575757;margin-bottom:8px;font-family:"Poppins-Medium";font-size:1rem}form.svelte-17l11bh input.svelte-17l11bh{background:#F5F5F5;border-radius:16px;border:none;padding:8px;margin-bottom:16px;font-family:"Poppins-Light"}form.svelte-17l11bh .btn.svelte-17l11bh{background-color:#F5F5F5;font-family:"Poppins-SemiBold";margin-top:32px;color:#DDB0AF;width:fit-content}form.svelte-17l11bh .status.svelte-17l11bh{padding-top:32px}',
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { description } = $$props;
  let nom;
  let prenom;
  let telephone;
  let societe;
  let email;
  let innerDescriptionText = "Description";
  if (typeof description === "string" && description.length != 0)
    innerDescriptionText = description;
  let status = "";
  let statusClass = "";
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$2);
  return `<form method="post" class="svelte-17l11bh"><p contenteditable="false" class="svelte-17l11bh">${(($$value) => $$value === void 0 ? `` : $$value)(innerDescriptionText)}</p>
	<label for="nom" class="svelte-17l11bh">Nom</label>
	<input type="text" name="nom" id="nom" placeholder="Votre nom" class="svelte-17l11bh"${add_attribute("this", nom, 0)}>
	<label for="prenom" class="svelte-17l11bh">Prenom</label>
	<input type="text" name="prenom" id="prenom" placeholder="Votre prenom" class="svelte-17l11bh"${add_attribute("this", prenom, 0)}>
	<label for="societe" class="svelte-17l11bh">Société</label>
	<input type="text" name="societe" id="societe" placeholder="Votre société" class="svelte-17l11bh"${add_attribute("this", societe, 0)}>
	<label for="telephone" class="svelte-17l11bh">Téléphone</label>
	<input type="text" name="telephone" id="telephone" placeholder="Votre téléphone" class="svelte-17l11bh"${add_attribute("this", telephone, 0)}>
	<label for="email" class="svelte-17l11bh">Email</label>
	<input type="text" name="email" id="email" placeholder="Votre email" class="svelte-17l11bh"${add_attribute("this", email, 0)}>
	<button animate type="submit" class="btn svelte-17l11bh" for="envoyer" value="envoyer">Envoyer</button>
	<div class="${"status " + escape(statusClass, true) + " svelte-17l11bh"}" contenteditable="false">${(($$value) => $$value === void 0 ? `` : $$value)(status)}</div>
</form>`;
});

const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}.expertise{background-color:rgba(44, 154, 155, 0.1);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:64px 11%;transition:all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)}@media only screen and (max-width: 960px){.expertise{height:fit-content;padding:0 0 64px 0}}.expertise h2{text-align:center;padding:64px 0 32px 0;color:#575757}.expertise p{padding:0 32px 64px 32px;text-align:center;max-width:60%;color:#575757;font-family:"Poppins-Light"}@media only screen and (max-width: 960px){.expertise p{max-width:100%;padding:0 11%}}.expertise .btn{margin-bottom:32px;transition:all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);font-family:"Poppins-Light"}.expertise .swiper-container{margin-bottom:16px;position:relative}.expertise .swiper-container .swiper-slide{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.expertise .swiper-container .swiper-slide img{width:auto;height:80%;object-fit:contain;background-size:contain}@media only screen and (max-width: 960px){.expertise .swiper-container .swiper-slide img{width:80%}}.expertise .swiper-container .img-bg{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:auto;height:80%}.expertise .links{align-items:center;width:80%;height:64px}@media only screen and (max-width: 960px){.expertise .links{height:fit-content}}.expertise .links .link{flex-grow:initial;padding:24px;transition:all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);display:flex;align-items:center;justify-content:center;border-left:#575757 solid 1px;height:100%}@media only screen and (max-width: 960px){.expertise .links .link{padding:16px;border:none}}@media only screen and (min-width: 960px){.expertise .links .link:nth-child(6){border-right:#575757 solid 1px}}.expertise.redaction{background-color:rgba(229, 174, 30, 0.1)}.expertise.redaction .active{color:#e5ae1e !important}.expertise.redaction .btn{background:#e5ae1e}.expertise.redaction .swiper-pagination-bullet-active{background:#e5ae1e !important}.expertise.presse{background-color:rgba(229, 174, 30, 0.1)}.expertise.presse .active{color:#e5ae1e !important}.expertise.presse .btn{background:#e5ae1e}.expertise.presse .swiper-pagination-bullet-active{background:#e5ae1e !important}.expertise.graphisme{background-color:rgba(164, 139, 173, 0.1)}.expertise.graphisme .active{color:#a48bad}.expertise.graphisme .btn{background:#a48bad !important}.expertise.graphisme .swiper-pagination-bullet-active{background:#a48bad !important}.expertise.reseaux{background-color:rgba(44, 154, 155, 0.1)}.expertise.reseaux .active{color:#2c9a9b !important}.expertise.reseaux .btn{background:#2c9a9b}.expertise.reseaux .swiper-pagination-bullet-active{background:#2c9a9b !important}.expertise.photos{background-color:rgba(152, 154, 111, 0.1)}.expertise.photos .active{color:#989a6f !important}.expertise.photos .btn{background:#989a6f}.expertise.photos .swiper-pagination-bullet-active{background:#989a6f !important}.expertise.evenements{background-color:rgba(157, 82, 79, 0.1)}.expertise.evenements .active{color:#9d524f !important}.expertise.evenements .btn{background:#9d524f}.expertise.evenements .swiper-pagination-bullet-active{background:#9d524f !important}',
  map: null
};
const SliderExpertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  let links;
  let wrapper;
  let titreElem;
  let descElem;
  let bgImageSrc;
  $$result.css.add(css$1);
  return `<div class="expertise"${add_attribute("this", container, 0)}><h2 animate${add_attribute("this", titreElem, 0)}></h2>

	<p animate${add_attribute("this", descElem, 0)}></p>

	<div class="links"${add_attribute("this", links, 0)}><div class="link">Rédaction
		</div>

		<div class="link">Relation de presse
		</div>

		<div class="link">Graphisme
		</div>

		<div class="link">Réseaux sociaux
		</div>

		<div class="link">Photos &amp; vidéos
		</div>

		<div class="link">Événements
		</div></div>

	<div class="swiper-container"><div class="swiper-wrapper"${add_attribute("this", wrapper, 0)}><div class="swiper-slide" data-lag="0.1"><img src="/images/mokup.png" alt="expertise-slide"></div>

			<div class="swiper-slide" data-lag="0.1"><img src="/images/mokup.png" alt="expertise-slide"></div>

			<div class="swiper-slide" data-lag="0.1"><img src="/images/mokup.png" alt="expertise-slide"></div></div>

		<img class="img-bg"${add_attribute("src", bgImageSrc, 0)} alt="expertise-slide"></div>

	<div animate class="btn">En savoir +</div>
	<div class="pagination"></div>
</div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}#top.svelte-1jvmzsi.svelte-1jvmzsi.svelte-1jvmzsi{height:100vh;width:100%;overflow:hidden;position:relative}#top.svelte-1jvmzsi img.svelte-1jvmzsi.svelte-1jvmzsi{width:100%;height:100%;position:absolute;top:0;z-index:10;background-size:cover;object-fit:cover}#top.svelte-1jvmzsi .abso.svelte-1jvmzsi.svelte-1jvmzsi{position:absolute;left:50%}#top.svelte-1jvmzsi h1.svelte-1jvmzsi.svelte-1jvmzsi{width:100%;bottom:20%;transform:translate(-50%, 50%);word-break:break-word}@media only screen and (max-width: 960px){#top.svelte-1jvmzsi h1.svelte-1jvmzsi.svelte-1jvmzsi{word-break:initial;padding:16px}}@media only screen and (max-width: 359px){#top.svelte-1jvmzsi h1.svelte-1jvmzsi.svelte-1jvmzsi{font-size:3rem}}#top.svelte-1jvmzsi .bg-gris.svelte-1jvmzsi.svelte-1jvmzsi{height:100vh;width:100vh;border-radius:50vh;transform:translate(-50%, -30%) scale(1.2);opacity:0.5;top:100%;z-index:20;display:flex;justify-content:center;align-items:flex-end;background-color:#575757}.blanc.svelte-1jvmzsi.svelte-1jvmzsi.svelte-1jvmzsi{background-color:#fff;padding:10rem 11%;position:relative;overflow:hidden}@media only screen and (max-width: 960px){.blanc.svelte-1jvmzsi.svelte-1jvmzsi.svelte-1jvmzsi{margin:0;padding:64px 12px 32px 12px}}.blanc.svelte-1jvmzsi .wrapper.svelte-1jvmzsi.svelte-1jvmzsi{display:flex;flex-direction:row;flex-wrap:nowrap;position:relative}@media only screen and (max-width: 960px){.blanc.svelte-1jvmzsi .wrapper.svelte-1jvmzsi.svelte-1jvmzsi{flex-direction:column;left:0%}}.blanc.svelte-1jvmzsi .wrapper .bloc.svelte-1jvmzsi.svelte-1jvmzsi{width:50%}@media only screen and (max-width: 960px){.blanc.svelte-1jvmzsi .wrapper .bloc.desc-gauche.svelte-1jvmzsi.svelte-1jvmzsi{margin-bottom:32px}}@media only screen and (max-width: 960px){.blanc.svelte-1jvmzsi .wrapper .bloc.svelte-1jvmzsi.svelte-1jvmzsi{width:100%}}.blanc.svelte-1jvmzsi .wrapper .bloc p.svelte-1jvmzsi.svelte-1jvmzsi{font-family:"Poppins-Light";margin-bottom:64px}.blanc.svelte-1jvmzsi .wrapper .bloc .btn.svelte-1jvmzsi.svelte-1jvmzsi{background-color:#DDB0AF}.blanc.svelte-1jvmzsi .wrapper .img-droite.svelte-1jvmzsi.svelte-1jvmzsi{display:flex;justify-content:end;align-items:start}@media only screen and (max-width: 960px){.blanc.svelte-1jvmzsi .wrapper .img-droite.svelte-1jvmzsi.svelte-1jvmzsi{justify-content:center;align-items:center}}.blanc.svelte-1jvmzsi .wrapper .img-droite .conteneur.svelte-1jvmzsi.svelte-1jvmzsi{position:relative;width:100%;transform:translateX(20%);height:100%}@media only screen and (max-width: 960px){.blanc.svelte-1jvmzsi .wrapper .img-droite .conteneur.svelte-1jvmzsi.svelte-1jvmzsi{transform:none}}.blanc.svelte-1jvmzsi .wrapper .img-droite .conteneur span.svelte-1jvmzsi.svelte-1jvmzsi{position:absolute;width:200px;height:200px;border-radius:200px;background-color:#DDB0AF}@media only screen and (max-width: 960px){.blanc.svelte-1jvmzsi .wrapper .img-droite .conteneur span.svelte-1jvmzsi.svelte-1jvmzsi{display:none}}.blanc.svelte-1jvmzsi .wrapper .img-droite .conteneur span.top-left.svelte-1jvmzsi.svelte-1jvmzsi{transform:translate(-50%, -50%);z-index:5}.blanc.svelte-1jvmzsi .wrapper .img-droite .conteneur span.bottom-right.svelte-1jvmzsi.svelte-1jvmzsi{top:100%;left:100%;transform:translate(-50%, -50%);z-index:15}.blanc.svelte-1jvmzsi .wrapper .img-droite .conteneur img.svelte-1jvmzsi.svelte-1jvmzsi{position:relative;z-index:10;width:100%;height:100%;border-radius:32px;object-fit:cover}#proj-actu.svelte-1jvmzsi.svelte-1jvmzsi.svelte-1jvmzsi{padding:0;display:flex;flex-direction:row;justify-content:center;text-align:center}@media only screen and (max-width: 1150px){#proj-actu.svelte-1jvmzsi.svelte-1jvmzsi.svelte-1jvmzsi{flex-direction:column}}#proj-actu.svelte-1jvmzsi .projet.svelte-1jvmzsi.svelte-1jvmzsi{flex-basis:50%;flex-grow:1;position:relative;height:auto;width:100%;background-color:rgba(157, 82, 79, 0.1);display:flex;flex-direction:column;padding:64px 11%}@media only screen and (max-width: 1150px){#proj-actu.svelte-1jvmzsi .projet.svelte-1jvmzsi.svelte-1jvmzsi{width:100%}}#proj-actu.svelte-1jvmzsi .projet h2.svelte-1jvmzsi.svelte-1jvmzsi{text-align:left}@media only screen and (max-width: 960px){#proj-actu.svelte-1jvmzsi .projet.svelte-1jvmzsi.svelte-1jvmzsi{padding:16px}}#proj-actu.svelte-1jvmzsi .projet .btn.svelte-1jvmzsi.svelte-1jvmzsi{background-color:#9D524F}#proj-actu.svelte-1jvmzsi .projet img.svelte-1jvmzsi.svelte-1jvmzsi{position:absolute;right:5%;bottom:5%;width:40%;height:60%;object-fit:contain;background-size:contain}#proj-actu.svelte-1jvmzsi .actu.svelte-1jvmzsi.svelte-1jvmzsi{height:auto;background-color:#e1e1e1;padding:64px;flex-grow:1;width:100%;flex-basis:50%}@media only screen and (max-width: 1150px){#proj-actu.svelte-1jvmzsi .actu.svelte-1jvmzsi.svelte-1jvmzsi{width:100%;padding:32px 12px}}#proj-actu.svelte-1jvmzsi .actu .actu-content.svelte-1jvmzsi.svelte-1jvmzsi{display:flex;flex-direction:row;justify-content:center;align-items:center}#proj-actu.svelte-1jvmzsi .actu .actu-content .flip-container.svelte-1jvmzsi.svelte-1jvmzsi{height:20vw;width:20vw}@media only screen and (max-width: 1150px){#proj-actu.svelte-1jvmzsi .actu .actu-content .flip-container.svelte-1jvmzsi.svelte-1jvmzsi{height:30vw;width:30vw}}@media only screen and (max-width: 960px){#proj-actu.svelte-1jvmzsi .actu .actu-content .flip-container.svelte-1jvmzsi.svelte-1jvmzsi{height:70vw;width:70vw}}#proj-actu.svelte-1jvmzsi .actu .actu-content img.svelte-1jvmzsi.svelte-1jvmzsi{width:40%;height:40%;object-fit:contain;background-size:contain;transform:translateY(-20px)}@media only screen and (max-width: 960px){#proj-actu.svelte-1jvmzsi .actu .actu-content img.svelte-1jvmzsi.svelte-1jvmzsi{display:none}}#proj-actu.svelte-1jvmzsi h3.svelte-1jvmzsi.svelte-1jvmzsi{margin-top:32px;text-align:left}#proj-actu.svelte-1jvmzsi p.svelte-1jvmzsi.svelte-1jvmzsi{text-align:left;width:60%}#proj-actu.svelte-1jvmzsi .btn.svelte-1jvmzsi.svelte-1jvmzsi{margin:64px 0}@media only screen and (max-width: 1150px){#contact.svelte-1jvmzsi .wrapper.svelte-1jvmzsi.svelte-1jvmzsi{display:flex;flex-direction:column;left:0;align-items:center;justify-content:center}}#contact.svelte-1jvmzsi .wrapper.svelte-1jvmzsi h2.svelte-1jvmzsi{font-size:2.5rem}#contact.svelte-1jvmzsi .wrapper .contact-form.svelte-1jvmzsi.svelte-1jvmzsi{width:45%}@media only screen and (max-width: 1150px){#contact.svelte-1jvmzsi .wrapper .contact-form.svelte-1jvmzsi.svelte-1jvmzsi{width:90%}}@media only screen and (max-width: 960px){#contact.svelte-1jvmzsi .wrapper .contact-form.svelte-1jvmzsi.svelte-1jvmzsi{width:100%}}#contact.svelte-1jvmzsi .wrapper .contact-images.svelte-1jvmzsi.svelte-1jvmzsi{flex-grow:2;width:55%;position:relative;transform:translateX(20%)}@media only screen and (max-width: 1150px){#contact.svelte-1jvmzsi .wrapper .contact-images.svelte-1jvmzsi.svelte-1jvmzsi{display:none}}#contact.svelte-1jvmzsi .wrapper .contact-images .contact-image.svelte-1jvmzsi.svelte-1jvmzsi{margin-left:64px;position:absolute;object-fit:cover;background-size:cover;border-radius:32px}#contact.svelte-1jvmzsi .wrapper .contact-images .contact-image.svelte-1jvmzsi.svelte-1jvmzsi:nth-child(1){top:0;left:50%;transform:translate(-75%, -15%);z-index:2;height:40%;width:50%}#contact.svelte-1jvmzsi .wrapper .contact-images .contact-image.svelte-1jvmzsi.svelte-1jvmzsi:nth-child(2){top:50%;height:50%;width:40%;transform:translate(-30%, -50%);z-index:3}#contact.svelte-1jvmzsi .wrapper .contact-images .contact-image.svelte-1jvmzsi.svelte-1jvmzsi:nth-child(3){transform:translate(-100%, 20%);bottom:0;left:50%;height:50%;width:30%;z-index:4}#contact.svelte-1jvmzsi .wrapper .contact-images .contact-image.svelte-1jvmzsi.svelte-1jvmzsi:nth-child(4){border-radius:5000px;height:700px;width:700px;top:50%;right:-35%;background:#ddb0af;transform:translateY(-50%);z-index:1}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { actualite, projet } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="top" class="svelte-1jvmzsi"><img alt="background-sogo" src="/images/bg-home.png" class="svelte-1jvmzsi">
	<div class="abso bg-gris svelte-1jvmzsi"></div>

	<h1 animate class="abso svelte-1jvmzsi">Sogo Com, votre agence<br> de communication</h1></div>
<div class="blanc svelte-1jvmzsi" id="blanc"><div class="wrapper svelte-1jvmzsi"><div class="bloc desc-gauche svelte-1jvmzsi"><h2 animate class="svelte-1jvmzsi"><span class="grey svelte-1jvmzsi">Une équipe au cœur </span><br>
				<span class="pink svelte-1jvmzsi">pulsant</span></h2>
			<p animate class="svelte-1jvmzsi">Idées en fusion, inspiration pleine impulsion, ça bouillonne dans la marmite des Gommettes.
				De l’écorce jusqu’à la pulpe, on décortique jusqu’à extraire l’essentiel, la note juste et
				le ton qui détonne. Cible en plein cœur de votre identité !
				<br><br>
				Depuis 14 ans, Sogo Com a fait d’Annecy et des Alpes son territoire d’infusion. La communication
				grand angle en perfusion, la créativité sans limites pour détonation.
			</p>
		
			<a href="/agence" animate class="btn svelte-1jvmzsi">En savoir +
			</a></div>
		<div class="bloc img-droite svelte-1jvmzsi"><div class="conteneur svelte-1jvmzsi"><span data-lag=".2" class="bubble top-left svelte-1jvmzsi"></span>
				<img src="/images/home-equipe.png" alt="L'equipe" class="svelte-1jvmzsi">
				<span data-lag=".2" class="bubble bottom-right svelte-1jvmzsi"></span></div></div></div></div>
${validate_component(SliderExpertise, "SliderExpertise").$$render($$result, {}, {}, {})}

<div class="blanc svelte-1jvmzsi" id="proj-actu">${projet != null ? `<div class="projet svelte-1jvmzsi"><h2 animate class="grey svelte-1jvmzsi">Notre nouveau projet</h2>
			<h3 animate class="grey svelte-1jvmzsi">${escape(projet.titre)}</h3>
			<p animate class="svelte-1jvmzsi">${escape(projet.descriptionCourte)}</p>
			<a href="${"/projets/" + escape(projet.id, true)}" animate class="btn svelte-1jvmzsi">En savoir +</a>
			<img alt="projet"${add_attribute("src", projet.photo, 0)} class="svelte-1jvmzsi"></div>` : ``}

	${actualite != null ? `<div class="actu svelte-1jvmzsi"><h2 animate class="grey svelte-1jvmzsi">Notre dernière actu</h2>
			<div class="actu-content svelte-1jvmzsi"><img src="/images/fleche-actu-home.svg" alt="chemin" class="svelte-1jvmzsi">
				<div class="flip-container svelte-1jvmzsi">${validate_component(FlipCard, "FlipCard").$$render(
    $$result,
    {
      titre: actualite.titre,
      link: "/actualites/" + actualite.id,
      imageSrc: actualite.photo,
      description: actualite.descriptionCourte
    },
    {},
    {}
  )}</div></div></div>` : ``}</div>

<div class="blanc svelte-1jvmzsi" id="contact"><div class="wrapper svelte-1jvmzsi"><div class="contact-form svelte-1jvmzsi"><h2 animate class="grey svelte-1jvmzsi">Contactez nous !</h2>
			${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div>
		<div class="contact-images svelte-1jvmzsi"><img class="contact-image svelte-1jvmzsi" src="/images/contact-1.png" alt="contact-1">
			<img class="contact-image svelte-1jvmzsi" src="/images/contact-2.png" alt="contact-2">
			<img class="contact-image svelte-1jvmzsi" src="/images/contact-3.png" alt="contact-3">
			<span class="contact-image svelte-1jvmzsi"></span></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a135010a.js.map
