import { r as redirect } from './index-0087e825.js';
import { d as db } from './index4-a6208fb6.js';
import '@prisma/client';

let csr = true;
let ssr = false;
const prerender = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  prerender: prerender,
  ssr: ssr
});

const load = async (serverloadEvent) => {
  const { params } = serverloadEvent;
  const { idActualite = "" } = params;
  const actualite = await db.actualite.findUnique({
    where: {
      id: idActualite
    }
  });
  if (!actualite) {
    throw redirect(301, "/actualites");
  }
  return {
    actualite
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-abcdaee7.js')).default;
const universal_id = "src/routes/(front)/actualites/[idActualite]/+page.js";
const server_id = "src/routes/(front)/actualites/[idActualite]/+page.server.js";
const imports = ["_app/immutable/nodes/13.c7c13357.js","_app/immutable/chunks/index.dae810a7.js","_app/immutable/chunks/utils.9e65cc02.js","_app/immutable/chunks/index.0514b3e4.js","_app/immutable/chunks/index.e9d4fb40.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
const stylesheets = ["_app/immutable/assets/13.3c129fd7.css","_app/immutable/assets/FlipCard.b71f0435.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=13-b5c19bfc.js.map
