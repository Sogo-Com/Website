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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c66f3816.js')).default;
const universal_id = "src/routes/(front)/actualites/+page.js";
const server_id = "src/routes/(front)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/12.bcf132c8.js","_app/immutable/chunks/index.107dcb2b.js","_app/immutable/chunks/FlipCard.9296a415.js","_app/immutable/chunks/navigation.6bf2ddbc.js","_app/immutable/chunks/singletons.e9e312d4.js","_app/immutable/chunks/index.1d317714.js","_app/immutable/chunks/utils.aad758f4.js","_app/immutable/chunks/index.2ecbd46b.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
const stylesheets = ["_app/immutable/assets/12.bd6144e8.css","_app/immutable/assets/FlipCard.e62c3f0c.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-e5d77cac.js.map
