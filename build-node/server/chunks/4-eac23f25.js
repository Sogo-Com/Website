import { r as redirect } from './index-a4865dbd.js';
import 'bcrypt';
import './index5-21780dd4.js';
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

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a69a90e1.js')).default;
const server_id = "src/routes/(admin)/admin/home/+page.server.js";
const imports = ["_app/immutable/nodes/4.bc6943bf.js","_app/immutable/chunks/index.6e3c4109.js","_app/immutable/chunks/index.2cefe83d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.9eb499f3.js","_app/immutable/chunks/stores.b4e55a16.js","_app/immutable/chunks/singletons.0dfb7698.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-eac23f25.js.map
