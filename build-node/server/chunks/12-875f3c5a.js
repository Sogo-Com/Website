import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import './index3-a6208fb6.js';
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
const imports = ["_app/immutable/nodes/12.d40ffeff.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2a9c5617.js","_app/immutable/chunks/stores.ffa53cd4.js","_app/immutable/chunks/singletons.f6178af2.js","_app/immutable/chunks/utils.d8c4ba70.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-875f3c5a.js.map
