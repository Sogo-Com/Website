import { r as redirect } from './index2-0087e825.js';
import 'bcrypt';
import { d as db } from './index-a6208fb6.js';
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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-51ce6ccc.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/+page.server.js";
const imports = ["_app/immutable/nodes/10.57d16b61.js","_app/immutable/chunks/scheduler.f0ead462.js","_app/immutable/chunks/index.34cc1fde.js","_app/immutable/chunks/each.1201385c.js","_app/immutable/chunks/paths.79497da6.js"];
const stylesheets = ["_app/immutable/assets/10.a1f31461.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-8f41332e.js.map
