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

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-53ba61a7.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/home/+page.server.js";
const imports = ["_app/immutable/nodes/8.0fca0caf.js","_app/immutable/chunks/index.2d23d3b1.js","_app/immutable/chunks/stores.dc0daf0d.js","_app/immutable/chunks/singletons.8bcf61df.js","_app/immutable/chunks/utils.8173eaa4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-63c4fe23.js.map
