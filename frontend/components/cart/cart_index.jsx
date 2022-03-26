import React from "react"
import {amountFormat} from "../../util/string_util"

class CartIndex extends React.Component{
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

            {/* TODO: make cart item component */}
            {Object.values(cartItems).map(cartItem => (
                <ul key={cartItem.id}>
                  <li>{cartItem.productName}</li>
                  <li>price: ${cartItem.price.padEnd(5,'0')}</li>
                  {
                    cartItem.hasBag ? (
                      <>
                        <li>bag size: {cartItem.size}</li>
                        <li>grind: {cartItem.grind}</li>
                      </>
                    ) : ( 
                      null
                    )
                  }
                  <li>quantity: {cartItem.quantity}</li>
                </ul>
            ))}
            
            <div className="subtotal-container">
              <h2>subtotal: ${amountFormat(subtotal)}</h2>

            </div>
        </div>
      </div>
    )
  };
};

export default CartIndex;