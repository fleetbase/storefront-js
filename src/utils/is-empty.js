export function isEmpty(obj) {
    const none = obj === null || obj === undefined;
    if (none) {
        return none;
    }

    const objectType = typeof obj;

    if (typeof obj.size === 'number') {
        return !obj.size;
    }

    if (typeof obj.length === 'number' && objectType !== 'function') {
        return !obj.length;
    }

    return false;
}

export default isEmpty;
