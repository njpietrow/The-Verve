import React from "react";

class CartItem extends React.Component{
  render(){
    const cartItem = this.props.cartItem;
    return(
      <div className="cart-item">
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
      </div>
    )
  }
};

export default CartItem;