import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import CoffeeSubMenu from "./coffee_sub_menu";
import GearSubMenu from "./gear_sub_menu";
import LearnSubMenu from "./learn_sub_menu";
import { Link } from "react-router-dom";

export const COFFEE = "coffee";
export const GEAR = "gear";
export const LEARN = "learn"

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

  toggleVisible(field){
    if(this.state.subMenu === field || this.state.subMenu === "none" || this.state.visible == false){
        this.setState({visible: !this.state.visible})
    }
  }
  
  update(field){
    return () => { 
      this.setState({subMenu: field})
      this.toggleVisible(field)
    }
  } 

  // use instead of always rendering the coffee sub-menu.
  subMenu(){
    const {updateFilter} = this.props;

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
        return (
          <GearSubMenu
            visible={this.state.visible}
            toggleVisible={this.toggleVisible}
            updateFilter={updateFilter}
          />
        )
      case LEARN:
        return(
          <LearnSubMenu
            visible={this.state.visible}
            toggleVisible={this.toggleVisible}
            updateFilter={updateFilter}
          />
        )
      default:
        return null;
    }
      

  }

  render(){
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
            <a onClick={this.update(COFFEE)} > SHOP COFFEE </a>
            <a onClick={this.update(GEAR)} > SHOP GEAR </a>
            <a onClick={this.update(LEARN)} > LEARN MORE </a>
          </ul>
        </nav>
        <div className="sub-menu-panel-container">
            <div className={this.state.visible ? 'sub-menu-panel' : 'sub-menu-panel collapsed'}>
              {this.subMenu()}
            </div>
        </div>
      </header>
    )
  }
}

export default Header;