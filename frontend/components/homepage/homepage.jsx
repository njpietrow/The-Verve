import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component{

  componentDidMount(){
    this.unlisten = this.props.history.listen(() => {
      window.scroll({top: 0, left: 0, behavior: 'smooth' })
    });
  }

  render(){
    const updateFilter = this.props.updateFilter;
    document.title = "Verve";
    return(
      <div>
        <div className="splash-container">
          <img className="splash-photo" src="https://the-verve-seeds.s3.us-west-1.amazonaws.com/womens-history-month.png" />
          <div className="splash-title-container">
            <img className="splash-title-photo" src="https://the-verve-seeds.s3.us-west-1.amazonaws.com/download.webp" />
            <div className="splash-title-text">
              <p>
                In honor of Women's History Month, we're proudly featuring coffees produced by our women coffee partners for the month of March.
              </p>
            </div>
            <Link to="/collections/coffee/all-coffee" onClick={() => updateFilter("category", "all-coffee")}>
              <button className="shop-now-button">SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div className="coffee-selection">
          <div className="coffee-selection-item img1">
            <Link to="/collections/2">
              <img className="coffee-1" alt="amparo"/>
            </Link>
          </div>
          <div className="coffee-selection-item img2">
            <Link to="/collections/1">
              <img className="coffee-2" alt="nubia"/>
            </Link>
          </div>
          <div className="coffee-selection-item img3">
            <Link to="/collections/3"> 
              <img className="coffee-3" alt="bedhatu"/>
            </Link>
          </div>
        </div>
        <div className="blends-content">
          <img className="blends-photo" alt="blends-splash-image" />
          <div className="blends-text">
            <div className="splash-title-text">
              <p>
                Discover our most popular blends
              </p>
            </div>
            <Link to="/collections/coffee/blends" onClick={() => updateFilter("category", "blends")}>
              <button className="shop-now-button blends-button">SHOP BLENDS</button>
            </Link>
          </div>
        </div>
        <div className="coffee-talk">
          <div className="blends-text chat">
            <div className="splash-title-text">
              <p className="chat-icon"><i className="fa-solid fa-comments"></i></p>
              <p>
                We love coffee talk <br />
                Questions about how this website was made? The creator is just an email or chat away. Send him a line.
              </p>
            </div>
            <a href="mailto:njpietrow@gmail.com" target="_blank">
              <button className="shop-now-button blends-button">Contact</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
};

export default Homepage;