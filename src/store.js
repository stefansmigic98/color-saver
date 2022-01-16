import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import thunk from "redux-thunk";
import colorReducer from "./reducers/colorReducer";
import pageReducer from "./reducers/pageReducer";
import collectionReducer from "./reducers/collectionReducer";
import authReducer from "./reducers/authReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({ colorReducer, pageReducer, collectionReducer,authReducer }), composeEnhancers((applyMiddleware(thunk))));

export default store;