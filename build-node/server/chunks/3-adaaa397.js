import { l as locale, a as loadTranslations } from './index5-2fb00356.js';
import './index2-8abc0c01.js';
import './index3-ec5c8fd3.js';

const load = async ({ url }) => {
  const { pathname } = url;
  const defaultLocale = "fr";
  const initLocale = locale.get() || defaultLocale;
  await loadTranslations(initLocale, pathname);
  return {};
};

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-18fb9370.js')).default;
const universal_id = "src/routes/(front)/+layout.js";
const imports = ["_app/immutable/nodes/3.9b35e6c1.js","_app/immutable/chunks/index.ad00cec6.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.e66fab2d.js","_app/immutable/chunks/index.b96e0ed7.js","_app/immutable/chunks/stores.06df9502.js","_app/immutable/chunks/singletons.b352c615.js","_app/immutable/chunks/utils.7d327870.js"];
const stylesheets = ["_app/immutable/assets/3.40009ce0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=3-adaaa397.js.map
