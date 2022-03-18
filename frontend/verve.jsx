import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//BEGIN TESTING
import { signUp, logIn, logOut } from "./actions/session_actions";
const user = {
  email: "testing@gmail",
  password: "password"
}
//END TESTING

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()
  ReactDOM.render(<Root store={store}/>, root);


  //BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  window.user = user
  window.logIn = logIn
  window.signUp = signUp
  window.logOut = logOut
  //END TESTING
});