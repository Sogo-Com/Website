import { d as db } from './index4-a6208fb6.js';
import { e as error, j as json } from './index-0087e825.js';
import '@prisma/client';

function IsStringNotEmpty(str) {
  try {
    return str != null && typeof str === "string" && str.length > 0 && str.replace(/\s/g, "").length;
  } catch (e) {
    return false;
  }
}
function IsObject(obj) {
  try {
    return obj != null && typeof obj === "object";
  } catch (e) {
    return false;
  }
}
const ActualiteCRUD = {
  delete: async (id) => {
    const body = {
      message: "Actualité supprimé",
      data: {}
    };
    try {
      await db.actualite.delete({
        where: {
          id
        }
      });
    } catch (err) {
      const { status = 500, message = "server error" } = err;
      throw error(status, {
        message
      });
    }
    return json(body);
  },
  upsert: async (actualite) => {
    const body = {
      message: "Actualité enregistré",
      data: {}
    };
    let { id = "", titre = "", tempsLecture = "", redacteur = "", contenu = {} } = actualite;
    if (!IsStringNotEmpty(titre)) {
      throw error(400, {
        message: "Titre vide"
      });
    }
    if (!IsStringNotEmpty(tempsLecture)) {
      throw error(400, {
        message: "Aucun temps de lecture"
      });
    }
    if (!IsStringNotEmpty(redacteur)) {
      throw error(400, {
        message: "Aucun rédacteur"
      });
    }
    if (!IsObject(contenu)) {
      throw error(400, {
        message: "Contenu mal formaté"
      });
    }
    try {
      contenu = JSON.stringify(contenu);
      body.data = await db.actualite.upsert({
        where: {
          id
        },
        create: {
          titre,
          redacteur,
          tempsLecture,
          contenu
        },
        update: {
          titre,
          redacteur,
          tempsLecture,
          contenu
        }
      });
    } catch (err) {
      const { status = 500, message = "server error" } = err;
      throw error(status, {
        message
      });
    }
    return json(body);
  }
};
async function POST(event) {
  let { locals, request } = event;
  if (!locals.user) {
    throw error(403);
  }
  const actualite = await request.json();
  return await ActualiteCRUD.upsert(actualite);
}
async function DELETE(event) {
  let { locals, request } = event;
  if (!locals.user) {
    throw error(403);
  }
  let { id } = await request.json();
  return await ActualiteCRUD.delete(id);
}

export { DELETE, POST };
//# sourceMappingURL=_server-e0391ae8.js.map
