import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import CoffeeSubMenu from "./coffee_sub_menu";
import { Link } from "react-router-dom";

const COFFEE = "coffee";
const GEAR = "gear";
const LEARN = "learn"

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      subMenu: "none"
    }
    this.toggleVisible = this.toggleVisible.bind(this);
    this.subMenu = this.subMenu.bind(this);
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

  // use instead of always rendering the coffee sub-menu.
  subMenu(){
    switch(this.state.subMenu){
      case COFFEE:
        return (
          <CoffeeSubMenu
            visible={this.state.visible}
            toggleVisible={this.toggleVisible}
            updateFilter={updateFilter}
          />
        )
      case GEAR:

      case LEARN:

      default:
        return null;
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
              onClick={this.update(COFFEE)} 
            > 
              SHOP COFFEE 
            </a>
            <a 
              // toggle the sub-menu-panel-list for gear
              onClick={this.update(GEAR)} 
            > 
              SHOP GEAR 
            </a>
            <a 
              // toggle the sub-menu-panel-list for info pages
              onClick={this.update(LEARN)} 
            > 
              LEARN MORE 
            </a>
          </ul>
        </nav>
        <div className="sub-menu-panel-container">
            <div className={this.state.visible ? 'sub-menu-panel' : 'sub-menu-panel collapsed'}>
              <CoffeeSubMenu
                visible={this.state.visible}
                toggleVisible={this.toggleVisible}
                updateFilter={updateFilter}
              />
            </div>
        </div>
      </header>
    )
  }
}

export default Header;