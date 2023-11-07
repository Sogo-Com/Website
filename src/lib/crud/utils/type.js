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