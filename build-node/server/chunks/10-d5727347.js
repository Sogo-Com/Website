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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c9530038.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/+page.server.js";
const imports = ["_app/immutable/nodes/10.09a8f0f7.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2a9c5617.js","_app/immutable/chunks/each.7150cfb1.js","_app/immutable/chunks/utils.d8c4ba70.js"];
const stylesheets = ["_app/immutable/assets/10.ffb19a31.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-d5727347.js.map
