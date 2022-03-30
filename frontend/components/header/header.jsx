import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import CoffeeSubMenu from "./coffee_sub_menu";
import GearSubMenu from "./gear_sub_menu";
import LearnSubMenu from "./learn_sub_menu";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

export const COFFEE = "coffee";
export const GEAR = "gear";
export const LEARN = "learn"

const components = {
  coffee: CoffeeSubMenu,
  gear: GearSubMenu,
  learn: LearnSubMenu,
};

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      subMenu: "none",
      search: false,
      query: ""
    }
    this.toggleVisible = this.toggleVisible.bind(this);
    this.subMenu = this.subMenu.bind(this);
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.setState({visible: false})
    });
  }

  componentWillUnmount() {
      this.unlisten();
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

  updateSearch(e){
    e.preventDefault();
    this.setState({query: e.currentTarget.value})
  }

  // dynamically render sub-menu component based on subMenu state
  subMenu(){
    if (this.state.subMenu === "none") return null
    const SubMenu = components[this.state.subMenu];
    return (
      <SubMenu
        visible={this.state.visible}
        toggleVisible={this.toggleVisible}
        updateFilter={this.props.updateFilter}
      />
    )
  }

  //get Classname for toggle caret
  getToggleClass(menuTitle){
    return ((this.state.subMenu===menuTitle) && (this.state.visible)) ? 
      'toggle-menu active ' : 'toggle-menu';
  }

  render(){
    return(
      <header>

        <div className="banner">
          <Link to="/"><p>FREE SHIPPING ON SUBSCRIPTIONS & ORDERS $35+</p></Link>
        </div>
        <div className="layout-header">
          <div className="search-container">
            <a className="search" onClick={() => this.setState({search: !this.state.search})}>
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </a>
            <input
              id="search-input"
              className={this.state.search ? "" : "collapse-search" }
              type="text" 
              value={this.state.query}
              onChange={(e) => this.updateSearch(e)}
            />
          </div>
          <Link to="/"><img className="logo"/></Link>
          
          {/* <Link to="/"><img id="main-logo" src='https://the-verve-seeds.s3.us-west-1.amazonaws.com/logo.png' alt="main logo"  /></Link> */}
          <GreetingContainer />
        </div>
        <nav>
          <ul>
            <a onClick={this.update(COFFEE)} 
              className={this.getToggleClass(COFFEE)}
            > SHOP COFFEE </a>
            <a onClick={this.update(GEAR)} 
              className={this.getToggleClass(GEAR)}
            > SHOP GEAR </a>
            <a onClick={this.update(LEARN)} 
              className={this.getToggleClass(LEARN)}
            > LEARN MORE </a>
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

export default withRouter(Header);