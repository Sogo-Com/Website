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
  const { idProjet = "" } = params;
  const projet = await db.projet.findUnique({
    where: {
      id: idProjet
    }
  });
  if (!projet) {
    throw redirect(301, "/projets");
  }
  return {
    projet
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-867d97cf.js')).default;
const universal_id = "src/routes/(front)/projets/[idProjet]/+page.js";
const server_id = "src/routes/(front)/projets/[idProjet]/+page.server.js";
const imports = ["_app/immutable/nodes/25.ca6fa5ab.js","_app/immutable/chunks/scheduler.f0ead462.js","_app/immutable/chunks/index.34cc1fde.js","_app/immutable/chunks/Reader.ef0c0f42.js","_app/immutable/chunks/each.1201385c.js"];
const stylesheets = ["_app/immutable/assets/25.002541e4.css","_app/immutable/assets/Reader.e3df1f5e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=25-456d544a.js.map
