import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {currentUser, toggleCartModal, cartItemQuantity} = this.props;
    return (
      <div className="header-container">
        {/* {currentUser ? (<span>Welcome back, {currentUser.firstName} </span>) : null} */}
        
        {currentUser ? (
          <Link 
            to="/account" 
            className="header-link"
          > Account /</Link>
        ) : ( 
          <Link 
            to="/login" 
            className="header-link"
          > Login / </Link>
        )}
        <a 
          to="/cart" 
          className="header-link cart-count"
          onClick={() => toggleCartModal()}
          key={cartItemQuantity}
        > 
          <i className="fa-solid fa-cart-shopping"></i> ({cartItemQuantity}) 
        </a>
      </div>
    )
  }
}

export default Greeting;