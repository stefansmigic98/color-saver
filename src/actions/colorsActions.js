import { addDoc, collection, getDocs, deleteDoc, doc } from "@firebase/firestore"
import { db } from "../firebase/firebase"
import { hideAddToCollectionAction } from "./collectionActions"

const setColorAction = (color) => {
    return {
        type: "SET_COLOR",
        payload: { ...color }
    }

}

const setSavedColors = (colors) => {
    return {
        type: "SET_SAVED_COLORS",
        payload: { savedColors: colors }
    }
}

const deleteColorAction = (colorId) => {
    return {
        type: "DELETE_SAVED_COLOR",
        payload: { id: colorId }
    }
}

const startDeleteColor = (colorId) => {
    return async (dispatch, getState) => {
        const state = getState();
        const uid = state.authReducer.uid;

        try {
            await deleteDoc(doc(db, `users/${uid}/colors`, colorId));

            dispatch(deleteColorAction(colorId));
        }
        catch (e) {
            console.log(e);
        }


    }
}

const startSaveColor = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const uid = state.authReducer.uid;
        const color = state.colorReducer.color;
        try {
            const docRef = await addDoc(collection(db, `users/${uid}/colors`), color);

            dispatch(setSavedColors([{ id: docRef.id, data: color }, ...state.colorReducer.savedColors]))

        }
        catch (e) {
            console.log(e);
        }
    }
}

export const startAddColorToCollection = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const uid = state.authReducer.uid;
        const color = state.colorReducer.color;
        const selectedCollection = state.collectionReducer.selected;
        try {
            const docRef = await addDoc(collection(db, `users/${uid}/collections/${selectedCollection.id}/colors`), color);
            dispatch(hideAddToCollectionAction());

        }
        catch (e) {
            console.log(e);
        }

    }
}

const startGetColors = () => {

    return (dispatch, getState) => {
        const state = getState();
        if (state.authReducer == null) return;
        const uid = state.authReducer.uid;

        getDocs(collection(db, `users/${uid}/colors`))
            .then(snapshot => {
                const colors = [];
                snapshot.forEach(item => colors.unshift({ id: item.id, data: item.data() }));
                dispatch(setSavedColors(colors));
            });
    }
}



export { setColorAction, startGetColors, startSaveColor, setSavedColors, deleteColorAction, startDeleteColor }