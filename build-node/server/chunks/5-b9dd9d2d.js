import { r as redirect, f as fail } from './index2-0087e825.js';
import { a as IsStringNotEmpty } from './type-16dc740f.js';
import { d as db } from './index-a6208fb6.js';
import '@prisma/client';

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
  const actualites = await db.actualite.findMany();
  return {
    actualites
  };
};
const actions = {
  delete: async ({ request, locals }) => {
    const data = Object.fromEntries(await request.formData());
    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
      return fail(400, {
        data,
        errorMsg: "Vous n'etes pas connecté"
      });
    }
    const { id = null } = data;
    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data,
        errorMsg: "❌ L'identifiant de l'actualité est requis"
      });
    }
    try {
      const actualiteToDelete = await db.actualite.findUnique({
        where: {
          id
        }
      });
      if (actualiteToDelete == null) {
        return fail(400, {
          data,
          errorMsg: "L'actualité n'existe pas"
        });
      }
      await db.actualite.delete({
        where: {
          id
        }
      });
      return {
        data: void 0,
        errorMsg: void 0
      };
    } catch (err) {
      return fail(400, {
        data,
        errorMsg: "❌ Une erreur est survenue lors de la suppression de l'actualité"
      });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@.svelte-4e4fe8f0.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/(actualite)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/5.2d8a2ef7.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/forms.8f3439ee.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.9bdd001b.js","_app/immutable/chunks/paths.16628efc.js","_app/immutable/chunks/navigation.378af573.js","_app/immutable/chunks/2.0c572db0.js","_app/immutable/chunks/index.c4ca6160.js"];
const stylesheets = ["_app/immutable/assets/5.4de2109a.css","_app/immutable/assets/2.d9157a83.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-b9dd9d2d.js.map
