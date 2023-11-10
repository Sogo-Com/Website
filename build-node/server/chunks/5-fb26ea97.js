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
const imports = ["_app/immutable/nodes/5.c086a4c7.js","_app/immutable/chunks/index.107dcb2b.js","_app/immutable/chunks/_layout.09dcad16.js","_app/immutable/chunks/navigation.c16abb3a.js","_app/immutable/chunks/singletons.6e2a0eea.js","_app/immutable/chunks/index.1d317714.js","_app/immutable/chunks/utils.a85b8b84.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/actualite.81a79d1d.js"];
const stylesheets = ["_app/immutable/assets/5.0dfc2ba6.css","_app/immutable/assets/_layout.203f9e45.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-fb26ea97.js.map
