import { r as redirect } from './index-0087e825.js';
import 'bcrypt';
import { d as db } from './index3-a6208fb6.js';
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
const component = async () => component_cache ??= (await import('./_page@.svelte-9eae1677.js')).default;
const universal_id = "src/routes/(admin)/admin/(back)/(actualite)/actualite/[[idActualite]]/+page.js";
const server_id = "src/routes/(admin)/admin/(back)/(actualite)/actualite/[[idActualite]]/+page.server.js";
const imports = ["_app/immutable/nodes/4.994e73aa.js","_app/immutable/chunks/index.2d23d3b1.js","_app/immutable/chunks/_layout.959b1d8b.js","_app/immutable/chunks/navigation.d9b7f776.js","_app/immutable/chunks/singletons.8bcf61df.js","_app/immutable/chunks/utils.8173eaa4.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/actualite.eedcc206.js"];
const stylesheets = ["_app/immutable/assets/4.09595062.css","_app/immutable/assets/_layout.28fd15ac.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-4dbd2ee7.js.map
