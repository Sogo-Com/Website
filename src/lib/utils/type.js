export function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export function IsString(str) {
    try {
        return (str != null && typeof str === 'string')
    } catch (e) {
        return false;
    }
}

export function IsStringNotEmpty(str) {
    try {
        return (str != null && typeof str === 'string' && str.length > 0 && str.replace(/\s/g, '').length)
    } catch (e) {
        return false;
    }
}

export function IsObject(obj) {
    try {
        return (obj != null && typeof obj === 'object')
    } catch (e) {
        return false;
    }
}


export function IsFile(obj) {

    try {
        return (obj != null && typeof obj === 'object' && obj instanceof File)
    } catch (e) {
        return false;
    }

}

export function IsEmptyFile(obj) {

    try {
        return (IsFile(obj) && (!IsStringNotEmpty(obj.name) || obj.size == 0))
    } catch (e) {
        return false;
    }

}

export const PhotoExtensions = ['jpg', 'jpeg', 'png', 'webp','svg']

export function IsPhoto(obj) {

    try {

        if (IsEmptyFile(obj))
            return false

        const fileExtension = GetExtension(obj.name)

        return (PhotoExtensions.includes(fileExtension))
    } catch (e) {
        return false;
    }

}



export const VideosExtensions = ['mp4', 'webm', 'ogg']

export function IsVideo(obj) {

    try {

        if (IsEmptyFile(obj))
            return false

        const fileExtension = GetExtension(obj.name)

        return (VideosExtensions.includes(fileExtension))
    } catch (e) {
        return false;
    }

}

export function GetExtension(fname) {
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

export function StringToBoolean(string) {
    switch (string.toLowerCase().trim()) {
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return false;
    }
}