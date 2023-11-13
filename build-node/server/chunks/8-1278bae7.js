import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import './index4-a6208fb6.js';
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

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-44356871.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/home/+page.server.js";
const imports = ["_app/immutable/nodes/8.ac1ad9fc.js","_app/immutable/chunks/index.dae810a7.js","_app/immutable/chunks/index.e9d4fb40.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.0514b3e4.js","_app/immutable/chunks/stores.ebd906c0.js","_app/immutable/chunks/singletons.e64a3a7a.js","_app/immutable/chunks/utils.59e96e49.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-1278bae7.js.map
