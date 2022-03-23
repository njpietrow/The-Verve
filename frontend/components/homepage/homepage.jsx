import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component{

  render(){
    return(
      <div className="splash-container">
        <img className="splash-photo" />
        <div className="splash-title-container">
          <img className="splash-title-photo" />
          <div className="splash-title-text">
            In honor of Women's History Month, we're proudly featuring coffees produced by our women coffee partners for the month of March.
          </div>
            <Link to="/collections/all-coffee">
              <button className="shop-now-button">SHOP NOW</button>
            </Link>
        </div>
      </div>
    )
  }
};

export default Homepage;