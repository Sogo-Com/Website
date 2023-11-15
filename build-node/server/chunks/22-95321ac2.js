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
  const projets = await db.projet.findMany();
  return {
    projets
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-28bfa8c4.js')).default;
const universal_id = "src/routes/(front)/projets/+page.js";
const server_id = "src/routes/(front)/projets/+page.server.js";
const imports = ["_app/immutable/nodes/22.843a8157.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2e12a1dd.js","_app/immutable/chunks/each.7150cfb1.js","_app/immutable/chunks/navigation.c3315f63.js","_app/immutable/chunks/singletons.39d80b25.js","_app/immutable/chunks/utils.9ba427c4.js"];
const stylesheets = ["_app/immutable/assets/22.df520dfe.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=22-95321ac2.js.map
