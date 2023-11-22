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

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-34ac5753.js')).default;
const universal_id = "src/routes/(front)/actualites/[idActualite]/+page.js";
const server_id = "src/routes/(front)/actualites/[idActualite]/+page.server.js";
const imports = ["_app/immutable/nodes/17.258cbeac.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2a9c5617.js","_app/immutable/chunks/Reader.2173006b.js","_app/immutable/chunks/each.7150cfb1.js"];
const stylesheets = ["_app/immutable/assets/17.93a61f06.css","_app/immutable/assets/Reader.87d51c73.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=17-5f5823e5.js.map
