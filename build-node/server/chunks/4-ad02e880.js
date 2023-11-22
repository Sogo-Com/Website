import { r as redirect, f as fail } from './index-0087e825.js';
import { I as IsPhoto, a as IsStringNotEmpty } from './type-16dc740f.js';
import 'bcrypt';
import { d as db } from './index3-a6208fb6.js';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
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

const FULL_UPLOAD_PATH = `uploads/actualites/`;
const PARTIAL_UPLOAD_PATH = "/uploads/actualites/";
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
const actions = {
  create: async ({ request, locals }) => {
    const data = Object.fromEntries(await request.formData());
    if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
      return fail(400, {
        data,
        errorMsg: "Vous n'etes pas connecté"
      });
    }
    let { id, titre, redacteur, tempsLecture, descriptionCourte, contenu, photo, photoFile } = data;
    if (titre.length < 1) {
      return fail(400, {
        data,
        errorMsg: "❌ Le titre ne doit pas être vide"
      });
    }
    if (redacteur.length < 1) {
      return fail(400, {
        data,
        errorMsg: "❌ Le redacteur ne doit pas être vide"
      });
    }
    if (tempsLecture.length < 1) {
      return fail(400, {
        data,
        errorMsg: "❌ Le temps de lecture ne doit pas être vide"
      });
    }
    if (descriptionCourte.length < 1) {
      return fail(400, {
        data,
        errorMsg: "❌ La description courte ne doit pas être vide"
      });
    }
    try {
      if (IsPhoto(photoFile)) {
        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }
        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoFile.name}`;
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoFile.name}`;
        writeFileSync(fsPhotoPath, Buffer.from(await photoFile.arrayBuffer()));
        photo = dbPhotoPath;
      }
      const actualite = await db.actualite.upsert({
        where: {
          id
        },
        create: {
          titre,
          photo,
          redacteur,
          tempsLecture,
          descriptionCourte,
          contenu
        },
        update: {
          titre,
          photo,
          redacteur,
          tempsLecture,
          descriptionCourte,
          contenu
        }
      });
      return {
        data: actualite,
        errorMsg: void 0
      };
    } catch (err) {
      return fail(400, {
        data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement de l'actualité"
      });
    }
  },
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

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@.svelte-f1bd3da1.js')).default;
const universal_id = "src/routes/(admin)/admin/(back)/(actualite)/actualite/[[idActualite]]/+page.js";
const server_id = "src/routes/(admin)/admin/(back)/(actualite)/actualite/[[idActualite]]/+page.server.js";
const imports = ["_app/immutable/nodes/4.a67f3639.js","_app/immutable/chunks/boolean_attributes.7b38010d.js","_app/immutable/chunks/index.2a9c5617.js","_app/immutable/chunks/_layout.a0e7790b.js","_app/immutable/chunks/navigation.e93c23d8.js","_app/immutable/chunks/singletons.f6178af2.js","_app/immutable/chunks/utils.d8c4ba70.js","_app/immutable/chunks/each.7150cfb1.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/forms.8111dc80.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/Writer.a696b05f.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
const stylesheets = ["_app/immutable/assets/4.59d28b2e.css","_app/immutable/assets/_layout.53e7a038.css","_app/immutable/assets/Writer.47e89250.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-ad02e880.js.map
