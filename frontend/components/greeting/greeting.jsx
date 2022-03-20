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
        {currentUser ? (<span> --{currentUser.email}-- </span>) : null}
        
        {currentUser ? (
          <Link 
            to="/account" 
            className="header-link"
          >
            Account /
          </Link>
        ) : ( 
          <Link 
            to="/login" 
            className="header-link"
          >
            Login /
          </Link>
        )}
        <Link 
          to="/cart" 
          className="header-link"
        >
          🛒 (0)
        </Link>
      </div>
    )
  }
}

export default Greeting;