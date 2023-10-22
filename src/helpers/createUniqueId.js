let id = 0;

const getUniqueId = () => {
    return id++;
}

export {
    id,
    getUniqueId,
}