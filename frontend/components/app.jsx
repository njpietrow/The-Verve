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
    <header>
      <div className="banner">
        <a href="/"><p>FREE SHIPPING ON SUBSCRIPTIONS & ORDERS $35+</p></a>
      </div>
      <div className="layout-header">
        <div className="search-container">
          <Link to="/search" className="search">🔍</Link>
        </div>
        <a href="#"><img id="main-logo" /></a>
        <GreetingContainer />
      </div>
      <nav>
        <ul>
          <li> <a href="#"> SHOP COFFEE </a></li>
          <li> <a href="#"> SHOP GEAR </a></li>
          <li> <a href="#"> LEARN MORE</a></li>
        </ul>
      </nav>
    </header>
 
    <section className="main-content">
      <Route exact path="/"  component={ProductIndexContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <ProtectedRoute exact path="/account" component={AccountContainer} />
    </section>
    <footer>
      <div className="footer-content-container">
        <div className="footer-image-container">
          <img id="footer-logo" />
        </div>
        <div className="footer-column-container">
          <div className="one">
            <ul>
              <li>Ul1Li1</li>
            </ul>
            <ul>
              <li>Ul2Li1</li>
            </ul>
          </div>
          <div className="two">
            <p>Nice paragraph text</p>
          </div>
          <div className="three">
            <div>
              form to signup for newsletter.
            </div>
          </div>

        </div>
        <div className="margin-spacer">

        </div>
        <div className="footer-address-blocks">

        </div>
      </div>
    </footer>
    <noscript>You need to enable JavaScript to run this app.</noscript>
  </div>
);

export default App;