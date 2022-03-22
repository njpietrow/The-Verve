import React from "react";
import Header from "./header/header";
import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session_form/login_form_container";
import RegisterFormContainer from "./session_form/register_form_container";
import AccountContainer from "./account/account_container";
import ProductIndexContainer from "./product_index/product_index_container";
import Footer from "./footer/footer";
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import { Route, Link } from "react-router-dom";

const App = () => (
  <div className="app">

    <HeaderContainer />

    <section className="main-content">
      {/* force a re-render when visiting the same page by setting a unique key -- the current date */}
      {/* <Route path="/collections"  render={ () => <ProductIndexContainer key={Date.now()} /> }/> */}
      <Route path="/collections" component={ProductIndexContainer}/>
      <Route exact path="/"  render={ () => <img id="splash-photo" /> }/> 
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterFormContainer} />
      <ProtectedRoute exact path="/account" component={AccountContainer} />
    </section>

    <Footer />

    <noscript>You need to enable JavaScript to run this app.</noscript>
  </div>
);

export default App;