import { getDocs, collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"


const setCollectionsAction = (collection) => {
    return {
        type: "SET_COLLECTIONS",
        payload: collection
    }
}
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

export const createCollectionAction = (collectionName) => {
    return async (dispatch, getState) => {
        const state = getState();
        const uid = state.authReducer.uid;
        try {
            const docRef = await addDoc(collection(db, `users/${uid}/collections`), { name: collectionName });
            dispatch(fetchCollectionsAction());
        }
        catch (e) {
            console.log(e);
        }
    }
}
export const fetchCollectionsAction = () => {
    return (dispatch, getState) => {
        const state = getState();
        const uid = state.authReducer.uid;
        getDocs(collection(db, `users/${uid}/collections`)).then((snapshot) => {
            const collections = [];
            snapshot.forEach(item => collections.unshift({ id: item.id, data: item.data() }));
            dispatch(setCollectionsAction(collections));

        })
            .catch(err => console.log(err));
    }
}
export { setSelectedCollectionAction, removeSelectedCollectionAction }