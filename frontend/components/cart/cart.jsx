import React from "react"
import {amountFormat} from "../../util/string_util"
import CartItemContainer from "./cart_item_container";

class Cart extends React.Component{
  render(){
    const {cartItems, toggleCartModal, quantity, subtotal, checkout } = this.props;
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
              <h2>Cart</h2>
            </div>
            
            {cartItems ? (
              <>
                <>Your Cart is Empty</>
                <button>Shop Now</button>
              </>
            ) : (
              <>
                {Object.values(cartItems).map(cartItem => (
                    <CartItemContainer 
                      key={`${cartItem.id}-${cartItem.grind}-${cartItem.bagSize}-${cartItem.quantity}`} 
                      cartItem={cartItem}/> 
                ))}
                
                <div className="checkout-container">
                  <div className="bottom-line">
                    <h5>Subtotal:</h5>
                    <h5 className="not-bold">${amountFormat(subtotal)}</h5>
                  </div>
                  <div className="bottom-line">
                    <h5>Shipping:</h5>
                    <h5 className="not-bold">FREE</h5>
                  </div>
                  <button 
                    className="add-cart-button checkout"
                    onClick={() => checkout()}
                  >Proceed to Checkout</button>
                </div>
              </>
            )
            }

        </div>
      </div>
    )
  };
};

export default Cart;