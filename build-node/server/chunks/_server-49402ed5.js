import { f as fail } from './index-0087e825.js';
import { I as IsPhoto } from './type-16dc740f.js';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

const FULL_UPLOAD_PATH = `uploads/editorjs/`;
const PARTIAL_UPLOAD_PATH = "/uploads/editorjs/";
async function POST({ request, locals }) {
  const data = Object.fromEntries(await request.formData());
  if (!locals.user || locals.user.role == null || locals.user.role != "ADMIN") {
    return fail(400, {
      data,
      errorMsg: "Vous n'etes pas connecté"
    });
  }
  const { image } = data;
  try {
    if (IsPhoto(image)) {
      if (!existsSync(FULL_UPLOAD_PATH)) {
        mkdirSync(FULL_UPLOAD_PATH);
      }
      const fsPhotoPath = `${FULL_UPLOAD_PATH}${image.name}`;
      const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${image.name}`;
      writeFileSync(fsPhotoPath, Buffer.from(await image.arrayBuffer()));
      return new Response(
        JSON.stringify({
          success: 1,
          file: {
            url: dbPhotoPath
          }
        })
      );
    } else {
      return fail(400, {
        data,
        errorMsg: "❌ Le fichier n'est pas une photo"
      });
    }
  } catch (err) {
    return fail(400, {
      data,
      errorMsg: "❌ Une erreur est survenue lors de l'enregistrement de l'actualité"
    });
  }
}

export { POST };
//# sourceMappingURL=_server-49402ed5.js.map
