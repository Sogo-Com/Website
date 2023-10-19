import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import { d as db } from './index4-21780dd4.js';
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

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-10a2512d.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/[idContact]/+page.server.js";
const imports = ["_app/immutable/nodes/5.fe33a915.js","_app/immutable/chunks/index.b96e0ed7.js","_app/immutable/chunks/index.ad00cec6.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.e66fab2d.js","_app/immutable/chunks/utils.7d327870.js","_app/immutable/chunks/navigation.46135982.js","_app/immutable/chunks/singletons.b352c615.js"];
const stylesheets = ["_app/immutable/assets/5.04b1d1ba.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-de7337d2.js.map
