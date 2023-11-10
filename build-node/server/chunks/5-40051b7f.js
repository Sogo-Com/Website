import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
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
const component = async () => component_cache ??= (await import('./_page@.svelte-cdadbeef.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/(actualite)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/5.5c0ce65a.js","_app/immutable/chunks/index.107dcb2b.js","_app/immutable/chunks/_layout.c5010dd9.js","_app/immutable/chunks/navigation.aaa07193.js","_app/immutable/chunks/singletons.59e5f349.js","_app/immutable/chunks/index.1d317714.js","_app/immutable/chunks/utils.0ad909b7.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/actualite.113185d0.js"];
const stylesheets = ["_app/immutable/assets/5.0dfc2ba6.css","_app/immutable/assets/_layout.203f9e45.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-40051b7f.js.map
