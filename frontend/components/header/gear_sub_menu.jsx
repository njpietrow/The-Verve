import React from "react";
import { Link } from "react-router-dom";
import {GEAR} from "./header"

class GearSubMenu extends React.Component{
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
      this.props.toggleVisible(GEAR)
      this.props.updateFilter("category", field)
    }
  }
 
  render(){
    return(
      <ul className={this.state.visible ? 'visible' : 'hidden'}>
        <Link 
          to="/collections/all-gear" 
          onClick={this.handleClick("gear")}
        > 
          ALL 
        </Link>
        <Link 
          to="/collections/verve-merch" 
          onClick={this.handleClick("verve merch")}
        > 
          VERVE MERCH 
        </Link>
        <Link 
          to="/collections/brew-gear" 
        onClick={this.handleClick("brew gear")}
        > 
          BREW GEAR 
        </Link>
        <Link 
          to="/collections/mugs" 
          onClick={this.handleClick("mugs")}
        > 
          MUGS 
        </Link>
      </ul>
    )
  }
};

export default GearSubMenu;