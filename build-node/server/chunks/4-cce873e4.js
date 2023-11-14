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
const component = async () => component_cache ??= (await import('./_page@.svelte-9bdfd985.js')).default;
const universal_id = "src/routes/(admin)/admin/(back)/(actualite)/actualite/[[idActualite]]/+page.js";
const server_id = "src/routes/(admin)/admin/(back)/(actualite)/actualite/[[idActualite]]/+page.server.js";
const imports = ["_app/immutable/nodes/4.8a302a34.js","_app/immutable/chunks/index.dae810a7.js","_app/immutable/chunks/_layout.b3d1a5b1.js","_app/immutable/chunks/navigation.2aff1a2c.js","_app/immutable/chunks/singletons.a16c883c.js","_app/immutable/chunks/index.0514b3e4.js","_app/immutable/chunks/utils.9e65cc02.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/actualite.eedcc206.js"];
const stylesheets = ["_app/immutable/assets/4.09595062.css","_app/immutable/assets/_layout.28fd15ac.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-cce873e4.js.map
