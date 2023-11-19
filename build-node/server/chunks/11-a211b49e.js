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
const imports = ["_app/immutable/nodes/11.0dfd32f3.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/paths.293b2cb8.js","_app/immutable/chunks/navigation.d37752c9.js","_app/immutable/chunks/singletons.2efec134.js"];
const stylesheets = ["_app/immutable/assets/11.9a8d29aa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-a211b49e.js.map
