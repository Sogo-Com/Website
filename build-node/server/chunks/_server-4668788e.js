import { d as db } from './index4-a6208fb6.js';
import { e as error, j as json } from './index-0087e825.js';
import { writeFileSync } from 'fs';
import '@prisma/client';

function IsString(str) {
  try {
    return str != null && typeof str === "string";
  } catch (e) {
    return false;
  }
}
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
const ToBase64RawString = (base64String) => {
  return base64String.replace(/^data:image\/png;base64,/, "").replace(/^data:image\/jpg;base64,/, "").replace(/^data:image\/jpeg;base64,/, "").replace(/^data:image\/webp;base64,/, "");
};
const uuid = () => {
  return String("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(/[xy]/g, (character) => {
    const random = Math.random() * 16 | 0;
    const value = character === "x" ? random : random & 3 | 8;
    return value.toString(16);
  });
};
const FULL_UPLOAD_PATH = "./static/uploads/actualites/";
const PARTIAL_UPLOAD_PATH = "/uploads/actualites/";
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
    let { id = "", titre = "", photo = "", photo64 = "", tempsLecture = "", redacteur = "", descriptionCourte = "", contenu = {} } = actualite;
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
    if (!IsString(descriptionCourte)) {
      throw error(400, {
        message: "Description courte n'est pas correcte"
      });
    }
    if (!IsString(photo64)) {
      throw error(400, {
        message: "Photo incorrecte"
      });
    }
    if (!IsObject(contenu)) {
      throw error(400, {
        message: "Contenu mal formaté"
      });
    }
    try {
      contenu = JSON.stringify(contenu);
      if (IsStringNotEmpty(photo64)) {
        let photoName = `${uuid()}.webp`;
        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoName}`;
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoName}`;
        const photo64Raw = ToBase64RawString(photo64);
        writeFileSync(fsPhotoPath, photo64Raw, "base64");
        photo = dbPhotoPath;
      }
      body.data = await db.actualite.upsert({
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
//# sourceMappingURL=_server-4668788e.js.map
