
const initialState = {
    collections: [],
    selected:null
}
export default (collection = initialState, action) => {
    switch (action.type) {
        case 'SET_COLLECTIONS':
            return {...collection,collections: action.payload};
        case 'SET_SELECTED_COLLECTION':
            return { ...collection, selected: action.payload };
        case 'REMOVE_SELECTED_COLLECTION':
            return { ...collection,selected: null }
        default:
            return collection;
    }
}