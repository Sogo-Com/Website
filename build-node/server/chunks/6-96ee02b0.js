import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import './index4-21780dd4.js';
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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c1d61b76.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/home/+page.server.js";
const imports = ["_app/immutable/nodes/6.606ac458.js","_app/immutable/chunks/index.b96e0ed7.js","_app/immutable/chunks/index.ad00cec6.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.e66fab2d.js","_app/immutable/chunks/stores.06df9502.js","_app/immutable/chunks/singletons.b352c615.js","_app/immutable/chunks/utils.7d327870.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-96ee02b0.js.map
