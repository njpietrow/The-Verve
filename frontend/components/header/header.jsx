import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="banner">
      <Link to="/"><p>FREE SHIPPING ON SUBSCRIPTIONS & ORDERS $35+</p></Link>
    </div>
    <div className="layout-header">
      <div className="search-container">
        <Link to="/search" className="search">🔍</Link>
      </div>
      <Link to="/"><img id="main-logo" /></Link>
      <GreetingContainer />
    </div>
    <nav>
      <ul>
        <li> <Link to="/collections"> SHOP COFFEE </Link></li>
        <li> <a href="#"> SHOP GEAR </a></li>
        <li> <a href="#"> LEARN MORE</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;