import './index-0087e825.js';
import { d as db } from './index4-a6208fb6.js';
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
  const actualites = await db.actualite.findMany();
  return {
    actualites
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-46131165.js')).default;
const universal_id = "src/routes/(front)/actualites/+page.js";
const server_id = "src/routes/(front)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/14.860d15a9.js","_app/immutable/chunks/index.c3d3dcff.js","_app/immutable/chunks/FlipCard.8f7c2bf1.js","_app/immutable/chunks/navigation.8a94c8b1.js","_app/immutable/chunks/singletons.e3a4034d.js","_app/immutable/chunks/utils.f2137142.js"];
const stylesheets = ["_app/immutable/assets/14.20f4409c.css","_app/immutable/assets/FlipCard.96033987.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=14-e3571e43.js.map
