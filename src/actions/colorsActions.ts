import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { hideAddToCollectionAction } from "./collectionActions";
import {
  Color,
  DeleteSavedColorAction,
  SavedColor,
  SetColorAction,
  SetSavedColorsAction,
} from "../reducers/colorReducer";
import { AppDispatch, RootState } from "../store";

const setColorAction = (color: Color): SetColorAction => {
  return {
    type: "SET_COLOR",
    payload: { ...color },
  };
};

const setSavedColors = (colors: SavedColor[]): SetSavedColorsAction => {
  return {
    type: "SET_SAVED_COLORS",
    payload: {savedColors: colors },
  };
};

const deleteColorAction = (colorId: string): DeleteSavedColorAction => {
  return {
    type: "DELETE_SAVED_COLOR",
    payload: { id: colorId },
  };
};

const startDeleteColor = (colorId: string) => {
  return async (dispatch: any, getState:any) => {
    const state = getState();
    const uid = state.authReducer.uid;

    try {
      await deleteDoc(doc(db, `users/${uid}/colors`, colorId));

      dispatch(deleteColorAction(colorId));
    } catch (e) {
      console.log(e);
    }
  };
};

const startSaveColor = () => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const uid = state.authReducer.uid;
    const color = state.colorReducer.color;
    try {
      const docRef = await addDoc(collection(db, `users/${uid}/colors`), color);

      dispatch(
        setSavedColors([
          { id: docRef.id, data: color },
          ...state.colorReducer.savedColors,
        ])
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const startAddColorToCollection = () => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const uid = state.authReducer.uid;
    const color = state.colorReducer.color;
    const selectedCollection = state.collectionReducer.selected;
    try {
      const docRef = await addDoc(
        collection(
          db,
          `users/${uid}/collections/${selectedCollection.id}/colors`
        ),
        color
      );
      dispatch(hideAddToCollectionAction());
    } catch (e) {
      console.log(e);
    }
  };
};

const startGetColors = () => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    if (state.authReducer == null) return;
    const uid = state.authReducer.uid;

    getDocs(collection(db, `users/${uid}/colors`)).then((snapshot) => {
      const colors: SavedColor[] = [];
      snapshot.forEach((item) =>
        colors.unshift({ id: item.id, data: item.data() as Color })
      );
      dispatch(setSavedColors(colors));
    });
  };
};

export {
  setColorAction,
  startGetColors,
  startSaveColor,
  setSavedColors,
  deleteColorAction,
  startDeleteColor,
};
