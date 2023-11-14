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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f7dbf319.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/contacts/[idContact]/+page.server.js";
const imports = ["_app/immutable/nodes/7.bcfbb114.js","_app/immutable/chunks/index.2d23d3b1.js","_app/immutable/chunks/utils.8173eaa4.js","_app/immutable/chunks/navigation.d9b7f776.js","_app/immutable/chunks/singletons.8bcf61df.js"];
const stylesheets = ["_app/immutable/assets/7.4640cae0.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-6184e1fd.js.map
