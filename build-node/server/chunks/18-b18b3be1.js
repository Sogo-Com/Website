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
const component = async () => component_cache ??= (await import('./_page.svelte-4885cd39.js')).default;
const universal_id = "src/routes/(front)/agence/+page.js";
const server_id = "src/routes/(front)/agence/+page.server.js";
const imports = ["_app/immutable/nodes/18.b30aa5de.js","_app/immutable/chunks/scheduler.f0ead462.js","_app/immutable/chunks/index.34cc1fde.js","_app/immutable/chunks/FlipCard.b3521d20.js","_app/immutable/chunks/navigation.d0c55e9b.js","_app/immutable/chunks/singletons.61107698.js","_app/immutable/chunks/paths.79497da6.js","_app/immutable/chunks/each.1201385c.js","_app/immutable/chunks/swiper.3b5d8e33.js"];
const stylesheets = ["_app/immutable/assets/18.3ae5a1ad.css","_app/immutable/assets/FlipCard.301fc32e.css","_app/immutable/assets/swiper.0705b292.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=18-b18b3be1.js.map
