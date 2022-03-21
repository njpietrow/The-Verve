import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//BEGIN TESTING
import { register, logIn, logOut } from "./actions/session_actions";
import { getProduct } from "./util/product_api_util";
const user = {
  email: "testing@gmail",
  password: "password"
}
//END TESTING

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  //BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  window.user = user;
  window.logIn = logIn;
  window.register = register;
  window.logOut = logOut;

  window.getProduct = getProduct;
  //END TESTING
});