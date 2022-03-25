import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component{

  render(){
    const updateFilter = this.props.updateFilter;
    return(
      <div className="splash-container">
        <img className="splash-photo" src="https://the-verve-seeds.s3.us-west-1.amazonaws.com/womens-history-month.png" />
        <div className="splash-title-container">
        <img className="splash-title-photo" src="https://the-verve-seeds.s3.us-west-1.amazonaws.com/download.webp" />
          <div className="splash-title-text">
            <p>
              In honor of Women's History Month, we're proudly featuring coffees produced by our women coffee partners for the month of March.
            </p>
          </div>
            <Link to="/collections" onClick={() => updateFilter("category", "coffee")}>
              <button className="shop-now-button">SHOP NOW</button>
            </Link>
        </div>
      </div>
    )
  }
};

export default Homepage;