import './index2-0087e825.js';
import { d as db } from './index-a6208fb6.js';
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

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f3f257dd.js')).default;
const universal_id = "src/routes/(front)/actualites/+page.js";
const server_id = "src/routes/(front)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/16.7e896415.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/FlipCard.b37ef1e0.js","_app/immutable/chunks/navigation.1922a831.js","_app/immutable/chunks/singletons.583532fa.js","_app/immutable/chunks/paths.9b4c2952.js"];
const stylesheets = ["_app/immutable/assets/16.966cbb7e.css","_app/immutable/assets/FlipCard.318c85e1.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=16-1944e239.js.map
