import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import CoffeeSubMenu from "./coffee_sub_menu";
import { Link } from "react-router-dom";

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      subMenu: "none"
    }
    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible(){
    this.setState({visible: !this.state.visible})
  }
  
  update(field){
    return () => { 
      this.setState({subMenu: field})
      this.toggleVisible()
    }
  }

  render(){
    const {updateFilter} = this.props;

    return(
      <header>
        <div className="banner">
          <Link to="/"><p>FREE SHIPPING ON SUBSCRIPTIONS & ORDERS $35+</p></Link>
        </div>
        <div className="layout-header">
          <div className="search-container">
            <Link to="/search" className="search"><img id="search-icon" /></Link>
          </div>
          <Link to="/"><img id="main-logo" /></Link>
          <GreetingContainer />
        </div>
        <nav>
          <ul>
            <a
              // toggle the sub-menu-panel-list for coffee
              onClick={this.update("coffee")} 
            > 
              SHOP COFFEE 
            </a>
            <a 
              // toggle the sub-menu-panel-list for gear
              onClick={this.update("gear")} 
            > 
              SHOP GEAR 
            </a>
            <a 
              // toggle the sub-menu-panel-list for info pages
              onClick={this.update("learn")} 
            > 
              LEARN MORE 
            </a>
          </ul>
        </nav>
        <div className="sub-menu-panel-container">
          {this.state.visible ? (
            <div className='sub-menu-panel'>
              <CoffeeSubMenu 
                toggleVisible={this.toggleVisible}
                updateFilter={updateFilter}
              />
            </div>
          ) : (
            null
          )}
          
        </div>
      </header>
    )
  }
}

export default Header;