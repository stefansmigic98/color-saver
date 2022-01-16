export default (collection = { selected: null }, action) => {
    switch (action.type) {
        case 'SET_SELECTED_COLLECTION':
            return { selected: action.payload };
        case 'REMOVE_SELECTED_COLLECTION':
            return { selected: null }
        default:
            return collection;
    }
}