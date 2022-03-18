import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import RegisterFormContainer from "./session_form/register_form_container";
// import AccountContainer from
import { AuthRoute, ProtectedRoute } from "../util/route_util"
// import { Route } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <h1>The Verve</h1>
      <GreetingContainer />
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/register" component={RegisterFormContainer} />
    <ProtectedRoute exact path="/account" component={AccountContainer} />
  </div>
);

export default App;