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
        <a href="https://github.com/njpietrow/The-Verve" target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a href="https://angel.co/u/nick-pietrow" target="_blank" rel="noopener noreferrer">ANGELLIST</a>
        <a href="https://www.linkedin.com/in/nickpietrow/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
      </ul>
    )
  }
};

export default CoffeeSubMenu;
