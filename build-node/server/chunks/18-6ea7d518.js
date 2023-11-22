import { d as db } from './index3-a6208fb6.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-c21374fb.js')).default;
const universal_id = "src/routes/(front)/agence/+page.js";
const server_id = "src/routes/(front)/agence/+page.server.js";
const imports = ["_app/immutable/nodes/18.128d7cd7.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2a9c5617.js","_app/immutable/chunks/FlipCard.e91e950e.js","_app/immutable/chunks/navigation.e93c23d8.js","_app/immutable/chunks/singletons.f6178af2.js","_app/immutable/chunks/utils.d8c4ba70.js","_app/immutable/chunks/each.7150cfb1.js","_app/immutable/chunks/swiper.54f90aec.js"];
const stylesheets = ["_app/immutable/assets/18.1343b4f3.css","_app/immutable/assets/FlipCard.fd473583.css","_app/immutable/assets/swiper.0705b292.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=18-6ea7d518.js.map
