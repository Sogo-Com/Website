import { IsEmptyFile, PhotoExtensions } from "./type";

export const FileToBase64 = file => new Promise((resolve, reject) => {

    if(IsEmptyFile(file))
        return reject("Le fichier est vide")

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});


export const Base64toWebp = (base64String, fileName = 'noname') => {
    const mimeType = 'image/webp';  // Spécifiez le type MIME comme 'image/webp'
  
    // Convertit la chaîne base64 en un objet File
    const file = new File([base64String], fileName, { type: mimeType });
  
    return file;
}

export const ToBase64RawString = (base64String) => {

    return base64String.replace(/^data:image\/png;base64,/, "").replace(/^data:image\/jpg;base64,/, "").replace(/^data:image\/jpeg;base64,/, "").replace(/^data:image\/webp;base64,/, "")

}