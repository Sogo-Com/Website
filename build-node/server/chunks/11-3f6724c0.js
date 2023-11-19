import { r as redirect } from './index2-0087e825.js';
import 'bcrypt';
import { d as db } from './index-a6208fb6.js';
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

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-bd6438a1.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/[idContact]/+page.server.js";
const imports = ["_app/immutable/nodes/11.f0658c8d.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/paths.16628efc.js","_app/immutable/chunks/navigation.378af573.js","_app/immutable/chunks/singletons.9bdd001b.js"];
const stylesheets = ["_app/immutable/assets/11.9a8d29aa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-3f6724c0.js.map
