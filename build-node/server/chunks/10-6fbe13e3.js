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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fa81156e.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/home/+page.server.js";
const imports = ["_app/immutable/nodes/10.660f6854.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2e12a1dd.js","_app/immutable/chunks/stores.7d43a14c.js","_app/immutable/chunks/singletons.39d80b25.js","_app/immutable/chunks/utils.9ba427c4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-6fbe13e3.js.map
