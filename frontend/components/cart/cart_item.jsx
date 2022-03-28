import React from "react";
import { Link } from "react-router-dom";

class CartItem extends React.Component{
  render(){
    const cartItem = this.props.cartItem;
    return(
      <div className="cart-item">
        <div className="cart-item-photo-container">
          <Link 
            to={`/collections/${cartItem.id}`}
            className="cart-item-photo"
            onClick={() => this.props.toggleCartModal()}
          >
            <img
              className="product-index-img" 
              // src={product.photoUrl} 
              src={"https://cdn.shopify.com/s/files/1/0035/9372/products/Nubianewcoffee_2048x2048.png?v=1645143809"}
              alt={`${cartItem.productName}-img`}   
            />
            <div className="circle">
              Qty:{cartItem.quantity}
            </div>
          </Link>
        </div>
        <div className="cart-item-description-container">  
          <div className="description-inner-content">
            <div>
              <Link 
                to={`/collections/${cartItem.id}`}
                className="cart-item-title"
                onClick={() => this.props.toggleCartModal()}
              >
                <h5>{cartItem.productName} </h5>  
                {cartItem.hasBag ? ( <h6>{cartItem.bagSize} — {cartItem.grind}</h6>):(null)}
              </Link>
            </div>
            <a onClick={() => this.props.removeCartItem(cartItem)}>
              <i  className="fa-solid fa-xmark remove-product"></i>
            </a>
          </div>
          <h5 className="cart-item-price">${cartItem.price.padEnd(5,'0')}</h5>

        </div>
      </div>
    )
  }
};

export default CartItem;