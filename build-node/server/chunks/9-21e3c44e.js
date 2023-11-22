import { r as redirect, f as fail } from './index-0087e825.js';
import { a as IsStringNotEmpty } from './type-16dc740f.js';
import { d as db } from './index3-a6208fb6.js';
import '@prisma/client';

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
  const projets = await db.projet.findMany();
  return {
    projets
  };
};
const actions = {
  delete: async ({ request, locals }) => {
    const data = Object.fromEntries(await request.formData());
    const { id = null } = data;
    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
      return fail(400, {
        data,
        errorMsg: "Vous n'etes pas connecté"
      });
    }
    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data,
        errorMsg: "❌ L'identifiant du projet est requis"
      });
    }
    try {
      const projetToDelete = await db.projet.findUnique({
        where: {
          id
        }
      });
      if (projetToDelete == null) {
        return fail(400, {
          data,
          errorMsg: "Le projet n'existe pas"
        });
      }
      await db.projet.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression du projet"
      });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@.svelte-a10aeef8.js')).default;
const server_id = "src/routes/(admin)/admin/(back)/(projet)/projets/+page.server.js";
const imports = ["_app/immutable/nodes/9.fbefc635.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2a9c5617.js","_app/immutable/chunks/each.7150cfb1.js","_app/immutable/chunks/forms.8111dc80.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.f6178af2.js","_app/immutable/chunks/utils.d8c4ba70.js","_app/immutable/chunks/navigation.e93c23d8.js","_app/immutable/chunks/_layout.a0e7790b.js","_app/immutable/chunks/index.c4ca6160.js"];
const stylesheets = ["_app/immutable/assets/9.f985d0fe.css","_app/immutable/assets/_layout.53e7a038.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-21e3c44e.js.map
