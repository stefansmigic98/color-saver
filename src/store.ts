import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import thunk from "redux-thunk";
import colorReducer from "./reducers/colorReducer";
import pageReducer from "./reducers/pageReducer";
import collectionReducer from "./reducers/collectionReducer";
import authReducer from "./reducers/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";
//const composeEnhancers =window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose  || compose;

const rootReducer = combineReducers({
  colorReducer,
  pageReducer,
  collectionReducer,
  authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),

);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
