import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import { d as db } from './index4-21780dd4.js';
import '@prisma/client';

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
  const contacts = await db.contact.findMany();
  return {
    contacts
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d31f2664.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/+page.server.js";
const imports = ["_app/immutable/nodes/4.92f549ad.js","_app/immutable/chunks/index.b96e0ed7.js","_app/immutable/chunks/index.ad00cec6.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.e66fab2d.js","_app/immutable/chunks/utils.7d327870.js"];
const stylesheets = ["_app/immutable/assets/4.ceb6a828.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-581652f3.js.map
