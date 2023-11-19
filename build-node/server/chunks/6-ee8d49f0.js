import { r as redirect, f as fail } from './index2-0087e825.js';
import { I as IsPhoto, a as IsStringNotEmpty } from './type-16dc740f.js';
import 'bcrypt';
import { d as db } from './index-a6208fb6.js';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
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

const FULL_UPLOAD_PATH = `uploads/collaborateurs/`;
const PARTIAL_UPLOAD_PATH = "/uploads/collaborateurs/";
const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
  const { params } = serverloadEvent;
  const { id = "" } = params;
  let collaborateur = await db.collaborateur.findUnique({
    where: {
      id
    }
  });
  collaborateur = collaborateur == null ? {} : collaborateur;
  return {
    collaborateur
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
    let { id, prenom = "", rang = 1, descriptionCourte = "", description = "", photoInactive = "", photoActive = "", photoInactiveFile, photoActiveFile } = data;
    console.log(data);
    if (prenom.length < 1) {
      return fail(400, {
        data,
        errorMsg: "❌ Le prenom ne doit pas être vide"
      });
    }
    if (rang == null || isNaN(rang) || parseInt(rang) < 1) {
      return fail(400, {
        data,
        errorMsg: "❌ Le rang doit être un nombre et supperieur à 0"
      });
    }
    rang = parseInt(rang);
    if (descriptionCourte.length < 1) {
      return fail(400, {
        data,
        errorMsg: "❌ La description courte ne doit pas être vide"
      });
    }
    if (!IsPhoto(photoInactiveFile) && !IsStringNotEmpty(photoInactive)) {
      return fail(400, {
        data,
        errorMsg: "❌ La photo inactive est requise"
      });
    }
    if (!IsPhoto(photoActiveFile) && !IsStringNotEmpty(photoActive)) {
      return fail(400, {
        data,
        errorMsg: "❌ La photo active est requise"
      });
    }
    try {
      if (IsPhoto(photoInactiveFile)) {
        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }
        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoInactiveFile.name}`;
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoInactiveFile.name}`;
        writeFileSync(fsPhotoPath, Buffer.from(await photoInactiveFile.arrayBuffer()));
        photoInactive = dbPhotoPath;
      }
      if (IsPhoto(photoActiveFile)) {
        if (!existsSync(FULL_UPLOAD_PATH)) {
          mkdirSync(FULL_UPLOAD_PATH);
        }
        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoActiveFile.name}`;
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoActiveFile.name}`;
        writeFileSync(fsPhotoPath, Buffer.from(await photoActiveFile.arrayBuffer()));
        photoActive = dbPhotoPath;
      }
      const collaborateur = await db.collaborateur.upsert({
        where: {
          id
        },
        create: {
          prenom,
          rang,
          descriptionCourte,
          description,
          photoInactive,
          photoActive
        },
        update: {
          prenom,
          rang,
          descriptionCourte,
          description,
          photoInactive,
          photoActive
        }
      });
      return {
        data: collaborateur,
        errorMsg: void 0
      };
    } catch (err) {
      return fail(400, {
        data,
        errorMsg: "❌ Une erreur est survenue lors de l'enregistrement du collaborateur"
      });
    }
  },
  delete: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { id = null } = data;
    if (!IsStringNotEmpty(id)) {
      return fail(400, {
        data,
        errorMsg: "❌ L'identifiant du collaborateur est requis"
      });
    }
    try {
      const collaborateurToDelete = await db.collaborateur.findUnique({
        where: {
          id
        }
      });
      if (collaborateurToDelete == null) {
        return fail(400, {
          data,
          errorMsg: "Le collaborateur n'existe pas"
        });
      }
      await db.collaborateur.delete({
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
        errorMsg: "❌ Une erreur est survenue lors de la suppression du collaborateur"
      });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@.svelte-2adc449b.js')).default;
const universal_id = "src/routes/(admin)/admin/(back)/(collaborateur)/collaborateur/[[id]]/+page.js";
const server_id = "src/routes/(admin)/admin/(back)/(collaborateur)/collaborateur/[[id]]/+page.server.js";
const imports = ["_app/immutable/nodes/6.71f2faaf.js","_app/immutable/chunks/index.ba7754e9.js","_app/immutable/chunks/2.b69fb2cc.js","_app/immutable/chunks/navigation.1922a831.js","_app/immutable/chunks/singletons.583532fa.js","_app/immutable/chunks/paths.9b4c2952.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/forms.851919d3.js","_app/immutable/chunks/parse.bee59afc.js"];
const stylesheets = ["_app/immutable/assets/6.4af84983.css","_app/immutable/assets/2.d9157a83.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-ee8d49f0.js.map
