import './index2-0087e825.js';
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
  const actualite = await db.actualite.findFirst({});
  const projet = await db.projet.findFirst({});
  return {
    actualite,
    projet
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a135010a.js')).default;
const universal_id = "src/routes/(front)/+page.js";
const server_id = "src/routes/(front)/+page.server.js";
const imports = ["_app/immutable/nodes/15.822baf94.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/paths.16628efc.js","_app/immutable/chunks/Contact.4c08471d.js","_app/immutable/chunks/swiper.3b5d8e33.js","_app/immutable/chunks/FlipCard.f6c49737.js","_app/immutable/chunks/navigation.378af573.js","_app/immutable/chunks/singletons.9bdd001b.js"];
const stylesheets = ["_app/immutable/assets/15.5a0ec93a.css","_app/immutable/assets/Contact.922825b4.css","_app/immutable/assets/swiper.0705b292.css","_app/immutable/assets/FlipCard.318c85e1.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=15-cd70853d.js.map
