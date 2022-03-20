import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import RegisterFormContainer from "./session_form/register_form_container";
import AccountContainer from "./account/account_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util"
// import { Route } from "react-router-dom";

const App = () => (
  <div className="app">
    <div className="banner">
      <p>FREE SHIPPING ON SUBSCRIPTIONS & ORDERS $35+</p>
    </div>
    <header>
      <h1>The Verve</h1>
      {/* <img src="/../../../app/assets/images/og-image.png" alt="header-logo" /> */}
      <GreetingContainer />
    </header>
    <section className="main-content">
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <ProtectedRoute exact path="/account" component={AccountContainer} />
    </section>
    <noscript>You need to enable JavaScript to run this app.</noscript>
  </div>
);

export default App;