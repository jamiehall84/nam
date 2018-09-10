const assets = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ASSET':
        return [
            ...state,
            {
                id: action.id,
                name: action.name,
                description: action.description,
                location: action.location
            }
        ]
        default:
            return state;
    }
}
export default assets;