let nextAsset = 0;
export const addAsset = (name, description, location) => ({
    type: 'ADD_ASSET',
    id: nextAsset++,
    name,
    description,
    location
})