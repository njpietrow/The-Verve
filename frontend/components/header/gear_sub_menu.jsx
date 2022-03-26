import React from "react";
import { Link } from "react-router-dom";
import GEAR from "./header"

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
          to="/collections/gear/all-gear" 
          onClick={this.handleClick("all-gear")}
        > 
          ALL 
        </Link>
        <Link 
          to="/collections/gear/merch"  
          onClick={this.handleClick("merch")}
        > 
          VERVE MERCH 
        </Link>
        <Link 
          to="/collections/gear/brew" 
        onClick={this.handleClick("brew")}
        > 
          BREW GEAR 
        </Link>
        <Link 
          to="/collections/gear/mugs" 
          onClick={this.handleClick("mugs")}
        > 
          MUGS 
        </Link>
      </ul>
    )
  }
};

export default GearSubMenu;
