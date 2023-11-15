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

export { IsPhoto as I, IsStringNotEmpty as a };
//# sourceMappingURL=type-16dc740f.js.map
