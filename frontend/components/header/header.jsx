import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";

const Header = ({updateFilter}) => (
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
        <Link to="/collections"> SHOP COFFEE </Link>
        <Link to="/"> SHOP GEAR </Link>
        <Link to="/"> LEARN MORE </Link>
      </ul>
    </nav>
    <div className="sub-menu-panel-container">
      <div className="sub-menu-panel">
        <ul className="sub-menu-panel-list">
          <Link to="/collections/all" onClick={() => updateFilter("category", "")}> ALL </Link>
          <Link to="/collections/new" onClick={() => updateFilter("category", "new")}> NEW </Link>
          <Link to="/collections/single+origin" onClick={() => updateFilter("category", "single origin")}> SINGLE ORIGIN </Link>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;