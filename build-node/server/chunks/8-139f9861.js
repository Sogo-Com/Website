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

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-aeb2734f.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/+page.server.js";
const imports = ["_app/immutable/nodes/8.67fb7a67.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2e12a1dd.js","_app/immutable/chunks/each.7150cfb1.js","_app/immutable/chunks/utils.9ba427c4.js"];
const stylesheets = ["_app/immutable/assets/8.c145665b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-139f9861.js.map
