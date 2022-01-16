const setSelectedCollectionAction = (collection) => {
    return {
        type: "SET_SELECTED_COLLECTION",
        payload: { ...collection }
    }

}

const removeSelectedCollectionAction = () => {
    return {
        type: "REMOVE_SELECTED_COLLECTION"
    }
}
export { setSelectedCollectionAction, removeSelectedCollectionAction }