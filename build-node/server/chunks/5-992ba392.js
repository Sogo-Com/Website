import { r as redirect } from './index-0087e825.js';
import { d as db } from './index4-a6208fb6.js';
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
const component = async () => component_cache ??= (await import('./_page@.svelte-7e59a4d7.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/(actualite)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/5.e0669c85.js","_app/immutable/chunks/index.dae810a7.js","_app/immutable/chunks/_layout.2ce13413.js","_app/immutable/chunks/navigation.522f9723.js","_app/immutable/chunks/singletons.e64a3a7a.js","_app/immutable/chunks/index.0514b3e4.js","_app/immutable/chunks/utils.59e96e49.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/actualite.eedcc206.js"];
const stylesheets = ["_app/immutable/assets/5.d6d65c8b.css","_app/immutable/assets/_layout.28fd15ac.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-992ba392.js.map
