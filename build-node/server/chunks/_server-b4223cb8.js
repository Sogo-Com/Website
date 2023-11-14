import { d as db } from './index4-a6208fb6.js';
import { e as error, j as json } from './index-0087e825.js';
import { writeFileSync } from 'fs';
import '@prisma/client';

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
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
function IsFile(obj) {
  try {
    return obj != null && typeof obj === "object" && obj instanceof File;
  } catch (e) {
    return false;
  }
}
function IsEmptyFile(obj) {
  try {
    return IsFile(obj) && (!IsStringNotEmpty(obj.name) || obj.size == 0);
  } catch (e) {
    return false;
  }
}
const PhotoExtensions = ["jpg", "jpeg", "png", "webp"];
function IsPhoto(obj) {
  try {
    if (IsEmptyFile(obj))
      return false;
    const fileExtension = GetExtension(obj.name);
    return PhotoExtensions.includes(fileExtension);
  } catch (e) {
    return false;
  }
}
function GetExtension(fname) {
  var pos = fname.lastIndexOf(".");
  var strlen = fname.length;
  if (pos != -1 && strlen != pos + 1) {
    var ext = fname.split(".");
    var len = ext.length;
    var extension = ext[len - 1].toLowerCase();
  } else {
    extension = "No extension found";
  }
  return extension;
}
const PUBLIC_UPLOADS_DIR = "uploads/";
const FULL_UPLOAD_PATH = `${PUBLIC_UPLOADS_DIR}actualites/`;
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
    let { id = "", titre = "", photo = "", photoFile = "", tempsLecture = "", redacteur = "", descriptionCourte = "", contenu = {} } = actualite;
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
    if (!IsJsonString(contenu)) {
      throw error(400, {
        message: "Contenu mal formaté"
      });
    }
    try {
      if (IsPhoto(photoFile)) {
        const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoFile.name}`;
        const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoFile.name}`;
        writeFileSync(fsPhotoPath, Buffer.from(await photoFile.arrayBuffer()));
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
  const formData = await request.formData();
  const object = Object.fromEntries(formData);
  return await ActualiteCRUD.upsert(object);
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
//# sourceMappingURL=_server-b4223cb8.js.map
