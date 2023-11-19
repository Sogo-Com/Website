import { r as redirect } from './index2-0087e825.js';
import 'bcrypt';
import './index-a6208fb6.js';
import '@prisma/client';

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-83f0c2e1.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/home/+page.server.js";
const imports = ["_app/immutable/nodes/12.680e59ae.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/stores.b9e671aa.js","_app/immutable/chunks/singletons.9bdd001b.js","_app/immutable/chunks/paths.16628efc.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-585942d8.js.map
