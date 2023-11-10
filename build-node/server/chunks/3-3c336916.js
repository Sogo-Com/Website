import { l as locale, a as loadTranslations } from './index5-052ab730.js';
import './index2-65a07f2f.js';
import './index3-cf31b2df.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-b27cfbbb.js')).default;
const universal_id = "src/routes/(front)/+layout.js";
const imports = ["_app/immutable/nodes/3.ae493b96.js","_app/immutable/chunks/index.2ecbd46b.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.1d317714.js","_app/immutable/chunks/index.107dcb2b.js","_app/immutable/chunks/stores.bfed24c4.js","_app/immutable/chunks/singletons.e9e312d4.js","_app/immutable/chunks/utils.aad758f4.js"];
const stylesheets = ["_app/immutable/assets/3.e172aa3e.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=3-3c336916.js.map
