import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import { d as db } from './index4-a6208fb6.js';
import '@prisma/client';

let csr = true;
let ssr = false;
const prerender = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  prerender: prerender,
  ssr: ssr
});

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
  const { params } = serverloadEvent;
  const { idActualite = "" } = params;
  let actualite = await db.actualite.findUnique({
    where: {
      id: idActualite
    }
  });
  actualite = actualite == null ? {} : actualite;
  return {
    actualite
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@.svelte-9f33d33d.js')).default;
const universal_id = "src/routes/(admin)/admin/(back)/(actualite)/actualite/[[idActualite]]/+page.js";
const server_id = "src/routes/(admin)/admin/(back)/(actualite)/actualite/[[idActualite]]/+page.server.js";
const imports = ["_app/immutable/nodes/4.6b4dcb35.js","_app/immutable/chunks/index.107dcb2b.js","_app/immutable/chunks/_layout.054beb11.js","_app/immutable/chunks/navigation.6bf2ddbc.js","_app/immutable/chunks/singletons.e9e312d4.js","_app/immutable/chunks/index.1d317714.js","_app/immutable/chunks/utils.aad758f4.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/actualite.2070d54b.js"];
const stylesheets = ["_app/immutable/assets/4.4ee4cd1c.css","_app/immutable/assets/_layout.637f588e.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-7de320c6.js.map
