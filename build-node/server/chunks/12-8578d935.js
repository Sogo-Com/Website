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
const component = async () => component_cache ??= (await import('./_page.svelte-b050d161.js')).default;
const universal_id = "src/routes/(front)/actualites/+page.js";
const server_id = "src/routes/(front)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/12.01b34315.js","_app/immutable/chunks/index.2d23d3b1.js","_app/immutable/chunks/FlipCard.cbd3082e.js","_app/immutable/chunks/navigation.d9b7f776.js","_app/immutable/chunks/singletons.8bcf61df.js","_app/immutable/chunks/utils.8173eaa4.js"];
const stylesheets = ["_app/immutable/assets/12.29058da7.css","_app/immutable/assets/FlipCard.b71f0435.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-8578d935.js.map
