import React from "react";
import { Link } from "react-router-dom";

export default ({updateFilter, toggleVisible}) => (
  <ul className="ub-menu-panel-coffee">
    <Link to="/collections/all" onClick={() => updateFilter("category", "")}> ALL </Link>
    <Link to="/collections/new" onClick={() => updateFilter("category", "new")}> NEW </Link>
    <Link to="/collections/single-origin" onClick={() => updateFilter("category", "single origin")}> SINGLE ORIGIN </Link>
    <Link to="/collections/blends" onClick={() => updateFilter("category", "blends")}> BLENDS </Link>
  </ul>
);