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
        <Link 
          to="/pages/story" 
          onClick={this.handleClick()}
        > 
          STORY 
        </Link>
        <Link 
          to="/pages/this-is-farmlevel"
          onClick={this.handleClick()}
        > 
          FARMLEVEL 
        </Link>
        <Link 
          to="/pages/nursery" 
          onClick={this.handleClick()}
        > 
          NURSERY PROJECT 
        </Link>
        <Link 
          to="/pages/contact" 
          onClick={this.handleClick()}
        > 
          CONTACT 
        </Link>
      </ul>
    )
  }
};

export default CoffeeSubMenu;
