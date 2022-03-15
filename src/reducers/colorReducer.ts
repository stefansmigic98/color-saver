import { AnyAction, Action } from "redux";

export interface Color {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}

interface ColorState {
  color: Color;
  savedColors: SavedColor[];
}
export interface SavedColor {
  id: string;
  data: Color & {
    [key: string]: any;
  };
}
const initialState: ColorState = {
  color: {
    hex: "#d61919",
    rgb: {
      r: 214,
      g: 25,
      b: 25,
      a: 1,
    },
  },
  savedColors: [],
};

const SET_COLOR = "SET_COLOR";
const SET_SAVED_COLORS = "SET_SAVED_COLORS";
const DELETE_SAVED_COLOR = "DELETE_SAVED_COLOR";

export interface SetColorAction extends Action<typeof SET_COLOR> {
  payload: Color;
}
export interface SetSavedColorsAction extends Action<typeof SET_SAVED_COLORS> {
  payload: {
    savedColors: SavedColor[];
  };
}
export interface DeleteSavedColorAction
  extends Action<typeof DELETE_SAVED_COLOR> {
  payload: {
    id: string;
  };
}

type ColorAction =
  | SetColorAction
  | SetSavedColorsAction
  | DeleteSavedColorAction;

const colorReducer = (
  c: ColorState = initialState,
  action: ColorAction
): ColorState => {
  switch (action.type) {
    case SET_COLOR:
      return { ...c, ...action.payload };
    case SET_SAVED_COLORS:
      return { ...c, ...action.payload };
    case DELETE_SAVED_COLOR:
      console.log(action.payload.id);
      const newArr = c.savedColors.filter(
        (item) => item.id != action.payload.id
      );
      return { ...c, ...{ savedColors: newArr } };
    default:
      return c;
  }
};

export default colorReducer;
