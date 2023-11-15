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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-50d0bf5f.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/home/+page.server.js";
const imports = ["_app/immutable/nodes/10.711a8f0e.js","_app/immutable/chunks/index.c3d3dcff.js","_app/immutable/chunks/stores.836c598c.js","_app/immutable/chunks/singletons.e3a4034d.js","_app/immutable/chunks/utils.f2137142.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-9de361d3.js.map
