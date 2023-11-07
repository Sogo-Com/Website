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