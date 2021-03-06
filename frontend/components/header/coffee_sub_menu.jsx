import React from "react";
import { Link } from "react-router-dom";
import {COFFEE} from "./header"

class CoffeeSubMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: this.props.visible
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible !== prevProps.visible) {
      this.setState({visible: this.props.visible})
    }
  }

  handleClick(field){
    return () => {
      this.props.toggleVisible(COFFEE)
      this.props.updateFilter("category", field)
    }
  }
 
  render(){
    return(
      <ul className={this.state.visible ? 'visible' : 'hidden'}>
        <Link 
          to="/collections/coffee/all-coffee" 
          onClick={this.handleClick("all-coffee")}
        > 
          ALL 
        </Link>
        <Link 
          to="/collections/coffee/new-arrivals" 
          onClick={this.handleClick("new-arrivals")}
        > 
          NEW 
        </Link>
        <Link 
          to="/collections/coffee/single-origin" 
          onClick={this.handleClick("single-origin")}
        > 
          SINGLE ORIGIN 
        </Link>
        <Link 
          to="/collections/coffee/blends" 
          onClick={this.handleClick("blends")}
        > 
          BLENDS 
        </Link>
        <Link 
          to="/collections/coffee/instant" 
          onClick={this.handleClick("instant")}
        > 
          INSTANT 
        </Link>
      </ul>
    )
  }
};

export default CoffeeSubMenu;
