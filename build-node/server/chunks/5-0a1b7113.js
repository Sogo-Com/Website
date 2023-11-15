import { r as redirect, f as fail } from './index-0087e825.js';
import { a as IsStringNotEmpty } from './type-16dc740f.js';
import { d as db } from './index3-a6208fb6.js';
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
const component = async () => component_cache ??= (await import('./_page@.svelte-c9ce0407.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/(actualite)/actualites/+page.server.js";
const imports = ["_app/immutable/nodes/5.e183a337.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2e12a1dd.js","_app/immutable/chunks/each.7150cfb1.js","_app/immutable/chunks/forms.2d26d270.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.39d80b25.js","_app/immutable/chunks/utils.9ba427c4.js","_app/immutable/chunks/navigation.c3315f63.js","_app/immutable/chunks/_layout.0ba7ea61.js","_app/immutable/chunks/index.c4ca6160.js"];
const stylesheets = ["_app/immutable/assets/5.59a976b6.css","_app/immutable/assets/_layout.86ce6987.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-0a1b7113.js.map
