import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from './index2-f58250d6.js';

const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}.block.svelte-100eoiw{margin-bottom:32px}.block-button.svelte-100eoiw{margin-bottom:64px}',
  map: null
};
const Reader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contenu } = $$props;
  const { blocks = [] } = contenu;
  if ($$props.contenu === void 0 && $$bindings.contenu && contenu !== void 0)
    $$bindings.contenu(contenu);
  $$result.css.add(css$1);
  return `<div id="contenu">${each(blocks, (block, index) => {
    return `<div class="${"block block-" + escape(block.type, true) + " svelte-100eoiw"}">${block.type == "paragraph" ? `<p contenteditable="false">${(($$value) => $$value === void 0 ? `` : $$value)(block.data.text)}</p>` : ``}
			${block.type == "header" && block.data.level == 2 ? `<h2>${escape(block.data.text)}</h2>` : ``}
			${block.type == "header" && block.data.level == 3 ? `<h3>${escape(block.data.text)}</h3>` : ``}
			${block.type == "header" && block.data.level == 4 ? `<h4>${escape(block.data.text)}</h4>` : ``}
			${block.type == "image" ? `<img${add_attribute("src", block.data.file.url, 0)}${add_attribute("alt", block.data.caption, 0)}>` : ``}
			${block.type == "list" ? `<ul>${each(block.data.items, (item) => {
      return `<li>${escape(item)}</li>`;
    })}
				</ul>` : ``}
			${block.type == "quote" ? `<blockquote>${escape(block.data.text)}</blockquote>` : ``}
			${block.type == "code" ? `<pre><code>${escape(block.data.code)}</code></pre>` : ``}
			${block.type == "delimiter" ? `<hr>` : ``}
			${block.type == "raw" ? `<div>${escape(block.data.html)}</div>` : ``}
			${block.type == "button" ? `<a class="btn"${add_attribute("href", block.data.link, 0)}>${escape(block.data.text)}</a>` : ``}
		</div>`;
  })}
</div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}#top.svelte-qdo25w.svelte-qdo25w.svelte-qdo25w{height:100vh;width:100%;overflow:hidden;position:relative;display:flex;justify-content:start;align-items:end}@media only screen and (max-width: 960px){#top.svelte-qdo25w.svelte-qdo25w.svelte-qdo25w{align-items:center;height:60vh}}#top.svelte-qdo25w img.svelte-qdo25w.svelte-qdo25w{width:100%;height:100%;position:absolute;top:0;z-index:10;background-size:cover;object-fit:cover}.actualite.svelte-qdo25w.svelte-qdo25w.svelte-qdo25w{z-index:15;position:relative;border-radius:32px;padding:64px 10%;margin:-400px 20% 64px 20%;background-color:#fff}@media only screen and (max-width: 1150px){.actualite.svelte-qdo25w.svelte-qdo25w.svelte-qdo25w{margin:-300px 10% 32px 10%}}@media only screen and (max-width: 960px){.actualite.svelte-qdo25w.svelte-qdo25w.svelte-qdo25w{margin:0;padding:64px 12px 32px 12px}}.actualite.svelte-qdo25w h1.svelte-qdo25w.svelte-qdo25w{color:#575757;padding:8px 0;font-size:3rem}.actualite.svelte-qdo25w .actu-bar.svelte-qdo25w.svelte-qdo25w{margin:32px 0;border-top:solid #575757 1px;border-bottom:solid #575757 1px;display:flex;flex-direction:row;justify-content:space-around}.actualite.svelte-qdo25w .actu-bar div.svelte-qdo25w.svelte-qdo25w{padding:16px 0;display:flex;width:fit-content;flex-basis:33.3%;align-items:center;font-family:"Poppins-Light";flex-grow:1;text-align:left}.actualite.svelte-qdo25w .actu-bar div.svelte-qdo25w img.svelte-qdo25w{padding:0 16px}.actualite.svelte-qdo25w .actu-bar .author.svelte-qdo25w.svelte-qdo25w{justify-content:left}.actualite.svelte-qdo25w .actu-bar .calendar.svelte-qdo25w.svelte-qdo25w{justify-content:center}.actualite.svelte-qdo25w .actu-bar .commentary.svelte-qdo25w.svelte-qdo25w{justify-content:right}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { actualite } = data;
  const contenu = actualite.contenu != null ? JSON.parse(actualite.contenu) : {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="top" class="svelte-qdo25w"><img alt="background-sogo"${add_attribute("src", actualite.photo ?? "/images/agence-bg.png", 0)} class="svelte-qdo25w"></div>

<div class="actualite svelte-qdo25w"><h1 class="svelte-qdo25w">${escape(actualite.titre ?? "Actualite")}</h1>

	<div class="actu-bar svelte-qdo25w"><div class="author svelte-qdo25w"><img src="/images/author.svg" alt="author" class="svelte-qdo25w">
			${escape(actualite.redacteur ?? "Aucun auteur")}</div>

		<div class="calendar svelte-qdo25w"><img src="/images/calendar.svg" alt="calendar" class="svelte-qdo25w">
			${escape(new Intl.DateTimeFormat("en-GB").format(actualite.createdAt))}</div>

		<div class="commentary svelte-qdo25w"><img src="/images/commentary.svg" alt="commentary" class="svelte-qdo25w">
			${escape(actualite.tempsLecture ?? "0")} min
		</div></div>

	<div class="contenu svelte-qdo25w">${validate_component(Reader, "Reader").$$render($$result, { contenu }, {}, {})}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-197edc50.js.map
