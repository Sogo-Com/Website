import { l as locale, a as loadTranslations } from './index4-de144b65.js';
import './index2-330ecdb0.js';
import './index3-20f57296.js';

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
const component = async () => (await import('./_layout.svelte-6ad58c11.js')).default;
const universal_id = "src/routes/(front)/+layout.js";
const imports = ["_app/immutable/nodes/3.b6ae67a9.js","_app/immutable/chunks/index.942ae3de.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.012e777a.js","_app/immutable/chunks/index.35481d87.js","_app/immutable/chunks/stores.1ad1b538.js","_app/immutable/chunks/singletons.b686ed25.js"];
const stylesheets = ["_app/immutable/assets/3.64207b74.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=3-fce735f3.js.map
