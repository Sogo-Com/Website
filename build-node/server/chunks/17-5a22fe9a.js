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
const component = async () => component_cache ??= (await import('./_page.svelte-3f540ad3.js')).default;
const universal_id = "src/routes/(front)/actualites/[idActualite]/+page.js";
const server_id = "src/routes/(front)/actualites/[idActualite]/+page.server.js";
const imports = ["_app/immutable/nodes/17.85cb030d.js","_app/immutable/chunks/scheduler.f0ead462.js","_app/immutable/chunks/index.34cc1fde.js","_app/immutable/chunks/Reader.ef0c0f42.js","_app/immutable/chunks/each.1201385c.js"];
const stylesheets = ["_app/immutable/assets/17.8af10315.css","_app/immutable/assets/Reader.e3df1f5e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=17-5a22fe9a.js.map
