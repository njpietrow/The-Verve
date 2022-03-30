import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import CoffeeSubMenu from "./coffee_sub_menu";
import GearSubMenu from "./gear_sub_menu";
import LearnSubMenu from "./learn_sub_menu";
import ResultsIndex from "./results_index";
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
      query: "",
      searchResults: {},
    }
    this.toggleVisible = this.toggleVisible.bind(this);
    this.subMenu = this.subMenu.bind(this);
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.setState({visible: false, search: false})
    });

    //add event listener to show to search bar + focus and to close/clear it
    window.addEventListener('click', (e) => {  
      if (document.querySelector('.search').contains(e.target)) {
        this.setState({search: !this.state.search, query: ""})
        const input = document.getElementById('search-input');
        input.setSelectionRange(0, 0);
        input.focus();
      }
      else if (!document.getElementById('dropdown-container').contains(e.target)){
        this.setState({search: false, query: ""})
      }
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
    // run api call to search db bas on query string
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
            <div className="auto">
              <a className="search" >
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </a>
            </div>
            <div id="dropdown-container" className={this.state.search ? "" : "collapse-search" }>
              <input
                id="search-input"
                className={this.state.search ? "" : "collapse-search" }
                type="text" 
                value={this.state.query}
                onChange={(e) => this.updateSearch(e)}
              />
              <ResultsIndex />
            </div>
          </div>
          <Link to="/"><img className="logo"/></Link>
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