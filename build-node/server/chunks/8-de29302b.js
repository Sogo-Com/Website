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
const imports = ["_app/immutable/nodes/8.fdfda128.js","_app/immutable/chunks/index.107dcb2b.js","_app/immutable/chunks/index.2ecbd46b.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.1d317714.js","_app/immutable/chunks/stores.2d801de2.js","_app/immutable/chunks/singletons.59e5f349.js","_app/immutable/chunks/utils.0ad909b7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-de29302b.js.map
