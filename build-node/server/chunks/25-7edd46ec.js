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
const component = async () => component_cache ??= (await import('./_page.svelte-6c247e2b.js')).default;
const universal_id = "src/routes/(front)/projets/[idProjet]/+page.js";
const server_id = "src/routes/(front)/projets/[idProjet]/+page.server.js";
const imports = ["_app/immutable/nodes/25.8e6fd506.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2a9c5617.js","_app/immutable/chunks/Reader.2173006b.js","_app/immutable/chunks/each.7150cfb1.js"];
const stylesheets = ["_app/immutable/assets/25.f8affb30.css","_app/immutable/assets/Reader.87d51c73.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=25-7edd46ec.js.map
