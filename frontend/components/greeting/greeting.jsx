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
          ><i className="fa-solid fa-circle-user"></i> Account /</Link>
        ) : ( 
          <Link 
            to="/login" 
            className="header-link"
          ><i className="fa-solid fa-arrow-right-to-bracket"></i> Login / </Link>
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