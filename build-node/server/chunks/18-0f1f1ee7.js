import { d as db } from './index-a6208fb6.js';
import '@prisma/client';

let csr = true;
let ssr = true;
const prerender = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  prerender: prerender,
  ssr: ssr
});

const load = async (serverloadEvent) => {
  const collaborateurs = await db.collaborateur.findMany();
  return {
    collaborateurs
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5803b498.js')).default;
const universal_id = "src/routes/(front)/agence/+page.js";
const server_id = "src/routes/(front)/agence/+page.server.js";
const imports = ["_app/immutable/nodes/18.86b9c2bb.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/FlipCard.f6c49737.js","_app/immutable/chunks/navigation.378af573.js","_app/immutable/chunks/singletons.9bdd001b.js","_app/immutable/chunks/paths.16628efc.js","_app/immutable/chunks/swiper.3b5d8e33.js"];
const stylesheets = ["_app/immutable/assets/18.30c8ea16.css","_app/immutable/assets/FlipCard.318c85e1.css","_app/immutable/assets/swiper.0705b292.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=18-0f1f1ee7.js.map
