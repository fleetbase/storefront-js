export function isEmpty(obj: unknown) {
    const none = obj === null || obj === undefined;
    if (none) {
        return none;
    }

    const objectType = typeof obj;

    if (typeof obj === 'object' && typeof (obj as { size?: unknown }).size === 'number') {
        return !(obj as { size: number }).size;
    }

    if ((typeof obj === 'object' || typeof obj === 'string') && typeof (obj as { length?: unknown }).length === 'number' && objectType !== 'function') {
        return !(obj as { length: number }).length;
    }

    return false;
}

export default isEmpty;
