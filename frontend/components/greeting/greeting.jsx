import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {currentUser} = this.props;
    return (
      <div>
        {currentUser ? (
          <Link to="/account" className="header-content">Account /</Link>
        ) : ( 
          <Link to="/login" className="header-content">Login /</Link>
        )}
        <Link to="/cart" className="header-content">🛒 (0)</Link>
      </div>
    )
  }
}

export default Greeting;