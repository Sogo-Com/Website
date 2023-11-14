import { r as redirect } from './index-0087e825.js';
import { d as db } from './index3-a6208fb6.js';
import '@prisma/client';

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
  const actualites = await db.actualite.findMany();
  return {
    actualites
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@.svelte-3defe4d4.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/(actualite)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/5.5b0e5ee1.js","_app/immutable/chunks/index.2d23d3b1.js","_app/immutable/chunks/_layout.959b1d8b.js","_app/immutable/chunks/navigation.d9b7f776.js","_app/immutable/chunks/singletons.8bcf61df.js","_app/immutable/chunks/utils.8173eaa4.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/actualite.eedcc206.js"];
const stylesheets = ["_app/immutable/assets/5.d6d65c8b.css","_app/immutable/assets/_layout.28fd15ac.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-da99cee6.js.map
