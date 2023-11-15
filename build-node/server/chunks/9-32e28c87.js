import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import { d as db } from './index3-a6208fb6.js';
import '@prisma/client';

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
  const { params } = serverloadEvent;
  const contact = await db.contact.findUnique({
    where: {
      id: params.idContact
    }
  });
  console.log(contact);
  return {
    contact
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c3464706.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/[idContact]/+page.server.js";
const imports = ["_app/immutable/nodes/9.2928ec02.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2e12a1dd.js","_app/immutable/chunks/utils.9ba427c4.js","_app/immutable/chunks/navigation.c3315f63.js","_app/immutable/chunks/singletons.39d80b25.js"];
const stylesheets = ["_app/immutable/assets/9.aac8daa0.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-32e28c87.js.map
