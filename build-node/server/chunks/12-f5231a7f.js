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
const component = async () => component_cache ??= (await import('./_page.svelte-2c1bcc8e.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/home/+page.server.js";
const imports = ["_app/immutable/nodes/12.2dc5bac8.js","_app/immutable/chunks/scheduler.f0ead462.js","_app/immutable/chunks/index.34cc1fde.js","_app/immutable/chunks/stores.c9cce57a.js","_app/immutable/chunks/singletons.61107698.js","_app/immutable/chunks/paths.79497da6.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-f5231a7f.js.map
