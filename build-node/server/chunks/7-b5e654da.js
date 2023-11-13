import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import { d as db } from './index4-a6208fb6.js';
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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4b00b980.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/[idContact]/+page.server.js";
const imports = ["_app/immutable/nodes/7.d64f81b4.js","_app/immutable/chunks/index.dae810a7.js","_app/immutable/chunks/index.e9d4fb40.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.0514b3e4.js","_app/immutable/chunks/utils.59e96e49.js","_app/immutable/chunks/navigation.522f9723.js","_app/immutable/chunks/singletons.e64a3a7a.js"];
const stylesheets = ["_app/immutable/assets/7.4640cae0.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-b5e654da.js.map
