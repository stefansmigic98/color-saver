import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { removeUserAction, setUserAction } from "./actions/authActions";
import { setSavedColors } from "./actions/colorsActions";
import Button from "./components/Button/Button";
import TextInput from "./components/Form/TextInput";

const auth = getAuth();
onAuthStateChanged(auth, (user: any) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    localStorage.setItem("kljuc", user.email);
    store.dispatch(setUserAction(user));

    // ...
  } else {
    // User is signed out
    // ...
    localStorage.removeItem("kljuc");

    //remove stored colors
    store.dispatch(setSavedColors([]));
    store.dispatch(removeUserAction());
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TextInput label='Username' className='stefan' />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
