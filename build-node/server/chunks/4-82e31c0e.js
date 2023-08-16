import { r as redirect } from './index-39e97e00.js';
import 'bcrypt';
import './index5-21780dd4.js';
import '@prisma/client';

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-c36075ba.js')).default;
const server_id = "src/routes/(admin)/admin/home/+page.server.js";
const imports = ["_app/immutable/nodes/4.6b4fe621.js","_app/immutable/chunks/index.06496065.js","_app/immutable/chunks/index.52eff79b.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.ceaea0bd.js","_app/immutable/chunks/stores.2596de7f.js","_app/immutable/chunks/singletons.772c4219.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-82e31c0e.js.map
