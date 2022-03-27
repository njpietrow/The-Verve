import React from "react";
import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session_form/login_form_container";
import RegisterFormContainer from "./session_form/register_form_container";
import AccountContainer from "./account/account_container";
import ProductShowContainer from "./product_show/product_show_container";
import ProductIndexContainer from "./product_index/product_index_container";
import HomepageContainer from "./homepage/hompage_container";
import CartContainer from "./cart/cart_container"
import Footer from "./footer/footer";
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import { Route, Link, Switch } from "react-router-dom";

const App = () => (
  <div className="app">

    <HeaderContainer />
    <CartContainer />

    <section className="main-content">
      <Switch>
        <Route exact path="/collections/coffee/:filter" component={ProductIndexContainer}/>
        <Route exact path="/collections/gear/:filter" component={ProductIndexContainer}/>
        <Route exact path="/collections/:productId" component={ProductShowContainer}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/register" component={RegisterFormContainer} />
        <ProtectedRoute exact path="/account" component={AccountContainer} />
        <Route path="/"  component={HomepageContainer}/> 
      </Switch>
    </section>

    <Footer />

    <noscript>You need to enable JavaScript to run this app.</noscript>
  </div>
);

export default App;