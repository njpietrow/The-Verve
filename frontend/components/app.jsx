import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import RegisterFormContainer from "./session_form/register_form_container";
import AccountContainer from "./account/account_container";
import ProductIndexContainer from "./product_index/product_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";

const App = () => (
  <div className="app">
    <div className="banner">
      <p>FREE SHIPPING ON SUBSCRIPTIONS & ORDERS $35+</p>
    </div>
    <header>
      <div className="search-container">
        <Link to="/search" className="search">🔍</Link>
      </div>
      <a href="#"><img id="main-logo" /></a>
      {/* <h1>The Verve</h1> */}
      
      <GreetingContainer />
    </header>
    <nav>
      <ul>
        <li> <a href="#"> TESTING 1</a></li>
        <li> <a href="#"> TESTING 2</a></li>
        <li> <a href="#"> TESTING 3</a></li>
      </ul>
    </nav>
    <section className="main-content">
      <Route exact path="/"  component={ProductIndexContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <ProtectedRoute exact path="/account" component={AccountContainer} />
    </section>
    <noscript>You need to enable JavaScript to run this app.</noscript>
  </div>
);

export default App;