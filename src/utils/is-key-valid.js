const isKeyValid = (key) => {
    return typeof key === 'string' && key.length > 30 && (key.startsWith('store_') || key.startsWith('network_'));
};

export default isKeyValid;
