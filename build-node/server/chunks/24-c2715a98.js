import { f as fail } from './index2-0087e825.js';
import { d as db } from './index-a6208fb6.js';
import '@prisma/client';

let csr = true;
let ssr = true;
const prerender = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  prerender: prerender,
  ssr: ssr
});

const load = async (serverloadEvent) => {
  const projets = await db.projet.findMany({
    where: {
      typeProjet: "redaction"
    }
  });
  return {
    projets
  };
};
const actions = {
  find: async ({ request, locals }) => {
    try {
      const data = Object.fromEntries(await request.formData());
      const { typeProjet = null } = data;
      const projets = await db.projet.findMany({
        where: {
          typeProjet
        }
      });
      if (projets == null || projets.length == 0) {
        return fail(400, {
          data: void 0,
          errorMsg: "❌ Aucun projet trouvé"
        });
      }
      return {
        data: projets,
        errorMsg: void 0
      };
    } catch (e) {
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 24;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1dce5482.js')).default;
const universal_id = "src/routes/(front)/projets/+page.js";
const server_id = "src/routes/(front)/projets/+page.server.js";
const imports = ["_app/immutable/nodes/24.59cc4615.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/navigation.d37752c9.js","_app/immutable/chunks/singletons.2efec134.js","_app/immutable/chunks/paths.293b2cb8.js","_app/immutable/chunks/forms.1d49e98c.js","_app/immutable/chunks/parse.bee59afc.js"];
const stylesheets = ["_app/immutable/assets/24.6ec850c1.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=24-c2715a98.js.map
