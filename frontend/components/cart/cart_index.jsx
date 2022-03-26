import React from "react"

class CartIndex extends React.Component{

  constructor(props){
    super(props);
  };


  // create separate component for the blurred backdrop and pass down state and toggle functions for 


  render(){
    const {cartItems, toggleCartModal, quantity, subtotal } = this.props;
    return(
        <div className={this.props.visible ? "cart-index-modal modal-visible" : "cart-index-modal"}>
          <div 
            className={this.props.visible ? "blurred-modal-area blur-visible" : "blurred-modal-area"}
            onClick={() => toggleCartModal() }
          >
          </div>
          <div className={this.props.visible ? "cart-index cart-visible" : "cart-index"}>
            <a 
              onClick={() => toggleCartModal()}
              className="close-cart-modal-button"
            ><i className="fa-solid fa-xmark"></i></a>
            <div className="cart-title-container">

              <h2> Cart </h2>
            </div>

            {Object.values(cartItems).map(cartItem => (
                <ul key={cartItem.id}>
                  <li>{cartItem.productName}</li>
                  <li>price: ${cartItem.price}</li>
                  <li>quantity: {cartItem.quantity}</li>
                </ul>
            ))}
            
            <div className="subtotal-container">
              <h2>subtotal: ${subtotal}</h2>

            </div>
          </div>
        </div>
    )
  };
};

export default CartIndex;