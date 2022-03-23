import React from "react";
import { Link } from "react-router-dom";

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
      this.props.toggleVisible()
      this.props.updateFilter("category", field)
    }
  }
 
  render(){
    return(
      <ul className={this.state.visible ? 'visible' : 'hidden'}>
        <Link 
          to="/collections/all" 
          onClick={this.handleClick("")}
        > 
          ALL 
        </Link>
        <Link 
          to="/collections/new" 
          onClick={this.handleClick("new")}
        > 
          NEW 
        </Link>
        <Link 
          to="/collections/single-origin" 
        onClick={this.handleClick("single origin")}
        > 
          SINGLE ORIGIN 
        </Link>
        <Link 
          to="/collections/blends" 
          onClick={this.handleClick("blends")}
        > 
          BLENDS 
        </Link>
      </ul>
    )
  }
};

export default CoffeeSubMenu;
