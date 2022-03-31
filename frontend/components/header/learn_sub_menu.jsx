import React from "react";
import { Link } from "react-router-dom";
import {LEARN} from "./header"

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
      this.props.toggleVisible(LEARN)
      this.props.updateFilter("category", field)
    }
  }
 
  render(){
    return(
      <ul className={this.state.visible ? 'visible' : 'hidden'}>
        <a href="https://github.com/njpietrow/The-Verve">GITHUB</a>
        <a href="https://angel.co/u/nick-pietrow">ANGELLIST</a>
        <a href="https://twitter.com/njpietrow" >TWITTER</a>
      </ul>
    )
  }
};

export default CoffeeSubMenu;
