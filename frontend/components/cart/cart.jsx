import React from "react"
import {amountFormat} from "../../util/string_util"
import CartItemContainer from "./cart_item_container";

class Cart extends React.Component{
  render(){
    const {cartItems, toggleCartModal, quantity, subtotal } = this.props;
    return(
      <div>
        <div 
          className={this.props.visible ? "blurred-modal-area blur-visible" : "blurred-modal-area"}
        >
        </div>
        <div className={this.props.visible ? "cart-index-modal modal-visible" : "cart-index-modal"}>
          <div 
            className="non-cart-area"
            onClick={() => toggleCartModal() }
          >
          </div>
        </div>
          <div className={this.props.visible ? "cart-index cart-visible" : "cart-index"}>
            <a 
              onClick={() => toggleCartModal()}
              className="close-cart-modal-button"
            ><i className="fa-solid fa-xmark"></i></a>
            <div className="cart-title-container">

              <h2> Cart </h2>
            </div>
            
            {/* TODO: cart item component quantity is not updating.
            it was when the text was rendered in this component though */}
            {Object.values(cartItems).map(cartItem => (
                <CartItemContainer key={`${cartItem.id}-${cartItem.quantity}`} cartItem={cartItem}/> 
            ))}
            
            <div className="subtotal-container">
              <h2>subtotal: ${amountFormat(subtotal)}</h2>

            </div> 
        </div>
      </div>
    )
  };
};

export default Cart;