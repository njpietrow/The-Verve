import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to The Verve</h1>, root);


  //BEGIN TESTING
  window.createAccount = () => (
    $.ajax({
      method: "POST",
      url: "/api/users",
      data: {
        user: {
          email: "testing2@gmail",
          password: "password"
        }
      }
    })
  );

  window.signIntoAccount = () => (
    $.ajax({
      method: "POST",
      url: "/api/session",
      data: {
        user: {
          email: "testing2@gmail",
          password: "password"
        }
      }
    })
  );

  window.signOutOfAccount = () => (
    $.ajax({
      method: "DELETE",
      url: "/api/session",
    })
  );

  //END TESTING
});