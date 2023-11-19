import { c as create_ssr_component, d as each, e as escape, b as add_attribute } from './index3-560a1835.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@import url("/styles/base.scss");@font-face{font-family:"ElMessiri-Bold";src:url("/fonts/ElMessiri-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"ElMessiri-SemiBold";src:url("/fonts/ElMessiri-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"ElMessiri-Medium";src:url("/fonts/ElMessiri-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Bold";src:url("/fonts/Poppins-Bold.ttf");font-style:normal;font-weight:700;font-display:swap}@font-face{font-family:"Poppins-SemiBold";src:url("/fonts/Poppins-SemiBold.ttf");font-style:normal;font-weight:600;font-display:swap}@font-face{font-family:"Poppins-Medium";src:url("/fonts/Poppins-Medium.ttf");font-style:normal;font-weight:500;font-display:swap}@font-face{font-family:"Poppins-Regular";src:url("/fonts/Poppins-Regular.ttf");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Poppins-Light";src:url("/fonts/Poppins-Light.ttf");font-style:normal;font-weight:400;font-display:swap}:root{--color-rose:#DDB0AF;--color-violet:#A48BAD;--color-jaune:#E5AE1E;--color-gris:#878787;--color-bordeaux:#9D524F;--color-bleu:#2C9A9B;--color-kaki:#80816D;--color-blanc:#F5F5F5;--color-gris-dark:#575757;--color-gris-clair:#E1E1E1;--font-primary-bold:"ElMessiri-Bold";--font-primary-semibold:"ElMessiri-SemiBold";--font-primary-medium:"ElMessiri-Medium";--font-primary-regular:"ElMessiri-Regular";--font-secondary-bold:"Poppins-Bold";--font-secondary-semibold:"Poppins-SemiBold";--font-secondary-medium:"Poppins-Medium";--font-secondary-regular:"Poppins-Regular";--font-secondary-light:"Poppins-Light";font-size:18px;--tablet:1150px;--phone:960px;--fold:359px}@media only screen and (max-width: 1150px){:root{font-size:14px}}@media only screen and (max-width: 960px){:root{font-size:12px}}@media only screen and (max-width: 359px){:root{font-size:10px}}.block.svelte-wpv180.svelte-wpv180{margin-bottom:32px}.block-button.svelte-wpv180.svelte-wpv180{margin-bottom:64px}.block-image.svelte-wpv180.svelte-wpv180{width:100%;max-height:400px;overflow:hidden;display:flex;justify-content:center;flex-direction:column;align-items:center}.block-image.svelte-wpv180 img.svelte-wpv180{width:100%;height:100%;object-fit:cover}',
  map: null
};
const Reader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contenu } = $$props;
  const { blocks = [] } = contenu;
  if ($$props.contenu === void 0 && $$bindings.contenu && contenu !== void 0)
    $$bindings.contenu(contenu);
  $$result.css.add(css);
  return `<div id="contenu">${each(blocks, (block, index) => {
    return `<div class="${"block block-" + escape(block.type, true) + " svelte-wpv180"}">${block.type == "paragraph" ? `<p contenteditable="false">${(($$value) => $$value === void 0 ? `` : $$value)(block.data.text)}</p>` : ``}
			${block.type == "header" && block.data.level == 2 ? `<h2>${escape(block.data.text)}</h2>` : ``}
			${block.type == "header" && block.data.level == 3 ? `<h3>${escape(block.data.text)}</h3>` : ``}
			${block.type == "header" && block.data.level == 4 ? `<h4>${escape(block.data.text)}</h4>` : ``}
		
			${block.type == "list" ? `<ul>${each(block.data.items, (item) => {
      return `<li>${escape(item)}</li>`;
    })}
				</ul>` : ``}
			${block.type == "quote" ? `<blockquote>${escape(block.data.text)}</blockquote>` : ``}
			${block.type == "image" ? `<img${add_attribute("src", block.data.file.url, 0)}${add_attribute("alt", block.data.caption, 0)} class="svelte-wpv180">
				<blockquote>${escape(block.data.caption)}</blockquote>` : ``}
			${block.type == "code" ? `<pre><code>${escape(block.data.code)}</code></pre>` : ``}
			${block.type == "delimiter" ? `<hr>` : ``}
			${block.type == "raw" ? `<div>${escape(block.data.html)}</div>` : ``}
			${block.type == "button" ? `<a class="btn"${add_attribute("href", block.data.link, 0)}>${escape(block.data.text)}</a>` : ``}
		</div>`;
  })}
</div>`;
});

export { Reader as R };
//# sourceMappingURL=Reader-339fc317.js.map
