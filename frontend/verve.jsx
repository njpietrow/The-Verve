import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import throttle from 'lodash.throttle';
import { loadState, saveState } from "./util/local_storage";

//BEGIN TESTING
import { register, logIn, logOut } from "./actions/session_actions";
import { fetchProduct, fetchProducts } from "./actions/product_actions";
import { updateFilter } from "./actions/filter_actions"
//END TESTING

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let prevState = loadState();
  if (!prevState) {
    prevState = {};
  }
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    const mergedState = Object.assign({},  prevState, preloadedState,)
    store = configureStore(mergedState);
    delete window.currentUser;
  } else {
    store = configureStore(prevState);
  }
  store.subscribe(throttle(() => {
    saveState({
      entities: {
        products: store.getState().entities.products
      },
      ui: {
        filters: {
          category: store.getState().ui.filters.category
        }
      }
    });
  }, 500));




  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  //BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  window.logIn = logIn;
  window.register = register;
  window.logOut = logOut;

  window.fetchProduct = fetchProduct;
  window.fetchProducts = fetchProducts;

  window.updateFilter = updateFilter;

  
  //END TESTING
});