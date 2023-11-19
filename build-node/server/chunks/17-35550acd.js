import { r as redirect } from './index2-0087e825.js';
import { d as db } from './index-a6208fb6.js';
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

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-0a976f8e.js')).default;
const universal_id = "src/routes/(front)/actualites/[idActualite]/+page.js";
const server_id = "src/routes/(front)/actualites/[idActualite]/+page.server.js";
const imports = ["_app/immutable/nodes/17.0f044e2d.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/Reader.b3eca05b.js"];
const stylesheets = ["_app/immutable/assets/17.5c54bc5d.css","_app/immutable/assets/Reader.e52b6f77.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=17-35550acd.js.map
