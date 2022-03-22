import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//BEGIN TESTING
import { register, logIn, logOut } from "./actions/session_actions";
import { fetchProduct, fetchProducts } from "./actions/product_actions";
import { updateFilter } from "./actions/filter_actions"
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
  
  // window.logIn = logIn;
  // window.register = register;
  // window.logOut = logOut;

  window.fetchProduct = fetchProduct;
  window.fetchProducts = fetchProducts;

  window.updateFilter = updateFilter;

  
  //END TESTING
});