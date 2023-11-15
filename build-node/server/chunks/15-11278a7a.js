import { r as redirect } from './index-0087e825.js';
import { d as db } from './index3-a6208fb6.js';
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

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d7767a15.js')).default;
const universal_id = "src/routes/(front)/actualites/[idActualite]/+page.js";
const server_id = "src/routes/(front)/actualites/[idActualite]/+page.server.js";
const imports = ["_app/immutable/nodes/15.6e6afce2.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2e12a1dd.js","_app/immutable/chunks/utils.9ba427c4.js","_app/immutable/chunks/each.7150cfb1.js"];
const stylesheets = ["_app/immutable/assets/15.4a2fd6a3.css","_app/immutable/assets/FlipCard.96033987.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=15-11278a7a.js.map
