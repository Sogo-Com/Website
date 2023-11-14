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
const component = async () => component_cache ??= (await import('./_layout.svelte-b0524d5c.js')).default;
const universal_id = "src/routes/(front)/+layout.js";
const imports = ["_app/immutable/nodes/3.27daf9c2.js","_app/immutable/chunks/index.e9d4fb40.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.0514b3e4.js","_app/immutable/chunks/index.dae810a7.js","_app/immutable/chunks/stores.ff863ffa.js","_app/immutable/chunks/singletons.a16c883c.js","_app/immutable/chunks/utils.9e65cc02.js","_app/immutable/chunks/navigation.2aff1a2c.js","_app/immutable/chunks/ScrollTrigger.54cd0f3a.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/SplitText.d9a01c3b.js"];
const stylesheets = ["_app/immutable/assets/3.5f00e564.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=3-45673105.js.map
