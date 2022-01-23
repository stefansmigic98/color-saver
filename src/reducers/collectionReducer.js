
const initialState = {
    collections: [],
    selected: null,
    showAddToCollection: false
}
export default (collection = initialState, {type,payload}) => {
    switch (type) {
        case 'SET_COLLECTIONS':
            return { ...collection, collections: [...payload] };
        case 'SET_SELECTED_COLLECTION':
            return { ...collection, selected: payload };
        case 'REMOVE_SELECTED_COLLECTION':
            return { ...collection, selected: null }
        case 'SHOW_ADD_TO_COLLECTION':
            return { ...collection, showAddToCollection: true }
        case 'HIDE_ADD_TO_COLLECTION':
            return { ...collection, showAddToCollection: false }
        default:
            return collection;
    }
}