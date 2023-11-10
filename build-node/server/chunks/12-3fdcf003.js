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
const component = async () => component_cache ??= (await import('./_page.svelte-e2a8a6b4.js')).default;
const universal_id = "src/routes/(front)/actualites/+page.js";
const server_id = "src/routes/(front)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/12.3b2a1a33.js","_app/immutable/chunks/index.107dcb2b.js","_app/immutable/chunks/FlipCard.55973a79.js","_app/immutable/chunks/navigation.aaa07193.js","_app/immutable/chunks/singletons.59e5f349.js","_app/immutable/chunks/index.1d317714.js","_app/immutable/chunks/utils.0ad909b7.js","_app/immutable/chunks/index.2ecbd46b.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
const stylesheets = ["_app/immutable/assets/12.219f4a63.css","_app/immutable/assets/FlipCard.ee467827.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-3fdcf003.js.map
