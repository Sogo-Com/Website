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
const component = async () => (await import('./_page.svelte-6f7de829.js')).default;
const server_id = "src/routes/(admin)/admin/home/+page.server.js";
const imports = ["_app/immutable/nodes/4.036f9c8e.js","_app/immutable/chunks/index.f3f28aff.js","_app/immutable/chunks/index.e8ea833e.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.299f05d0.js","_app/immutable/chunks/stores.51a37ead.js","_app/immutable/chunks/singletons.6641b7a3.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-a2d5a15d.js.map
