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
const component = async () => component_cache ??= (await import('./_page.svelte-f2ccad35.js')).default;
const universal_id = "src/routes/(front)/actualites/+page.js";
const server_id = "src/routes/(front)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/12.85ece8e1.js","_app/immutable/chunks/index.dae810a7.js","_app/immutable/chunks/FlipCard.a7eaeef4.js","_app/immutable/chunks/navigation.522f9723.js","_app/immutable/chunks/singletons.e64a3a7a.js","_app/immutable/chunks/index.0514b3e4.js","_app/immutable/chunks/utils.59e96e49.js","_app/immutable/chunks/index.e9d4fb40.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
const stylesheets = ["_app/immutable/assets/12.29058da7.css","_app/immutable/assets/FlipCard.b71f0435.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-ab478068.js.map
