import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import merge from 'lodash.merge'
import throttle from 'lodash.throttle';
import { loadState, saveState } from "./util/local_storage";

//BEGIN TESTING
import { toggleCartModal } from "./actions/cart_modal_actions";
import { register, logIn, logOut } from "./actions/session_actions";
import { fetchProduct, fetchProducts } from "./actions/product_actions";
import { updateFilter } from "./actions/filter_actions"
import { createReview } from "./actions/review_form_actions"
import { createLike } from "./actions/like_actions"
//END TESTING

document.addEventListener("DOMContentLoaded", () => {
  let store;
  //loadState will return undefined if there is no state key in local storage
  let localStorageState = loadState(); 
  if (localStorageState === undefined) localStorageState = {};
  if (window.currentUser) {
    let preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };

    //check if preloaded state.session.id matches localSS.session.id
      //if so merge localSS cartItems into preloaded state
      // otherwise don't merge anything.

    //deep merge so that entities with products doesn't overwrite
    //entities with users from the preloadedState.
    let mergedState = merge(preloadedState, localStorageState)
    store = configureStore(mergedState);
    delete window.currentUser;
  } else {
    store = configureStore(localStorageState);
  }
  store.subscribe(throttle(() => {
    saveState({
      entities: {
        cartItems: store.getState().entities.cartItems,
      },
      ui: {
        filters: {
          category: store.getState().ui.filters.category
        }
      },
    });
  }, 1000));




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
  window.toggleCartModal = toggleCartModal;

  window.createReview = createReview;

  window.createLike = createLike;
  
  //END TESTING
});