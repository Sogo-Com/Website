import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import { d as db } from './index3-a6208fb6.js';
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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c2ea8dc4.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/+page.server.js";
const imports = ["_app/immutable/nodes/6.7167893d.js","_app/immutable/chunks/index.2d23d3b1.js","_app/immutable/chunks/utils.8173eaa4.js"];
const stylesheets = ["_app/immutable/assets/6.89c7cad4.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-002506fc.js.map
