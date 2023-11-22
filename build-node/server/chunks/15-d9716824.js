import './index-0087e825.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-c79d70e6.js')).default;
const universal_id = "src/routes/(front)/+page.js";
const server_id = "src/routes/(front)/+page.server.js";
const imports = ["_app/immutable/nodes/15.022c8ecf.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2a9c5617.js","_app/immutable/chunks/utils.d8c4ba70.js","_app/immutable/chunks/Contact.c4efc10b.js","_app/immutable/chunks/swiper.54f90aec.js"];
const stylesheets = ["_app/immutable/assets/15.1e355caf.css","_app/immutable/assets/FlipCard.fd473583.css","_app/immutable/assets/Contact.673e60f1.css","_app/immutable/assets/swiper.0705b292.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=15-d9716824.js.map
