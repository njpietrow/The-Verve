import React from "react";
import { Link } from "react-router-dom";

class CartItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: parseInt(this.props.cartItem.quantity),
    }
  }

  update(val){
    if(this.state.quantity <= 0 && val === -1) return
    this.setState({quantity: val});
    this.props.updateCartItem(this.props.cartItem,this.state.quantity+val)
  }

  render(){
    const {cartItem} = this.props;
    const id = cartItem.id;
    return(
      <div className="cart-item">
        <div className="cart-item-photo-container">
          <Link 
            to={`/collections/${id}`}
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
                to={`/collections/${id}`}
                className="cart-item-title"
                onClick={() => this.props.toggleCartModal()}
              >
                <h5>{cartItem.productName} </h5>  
                {cartItem.hasBag ? ( <h6>{cartItem.bagSize} — {cartItem.grind}</h6>):(null)}
              </Link>
            </div>
            <a onClick={() => this.props.removeCartItem(cartItem)}>
              {/* <i  className="fa-solid fa-xmark remove-product"></i> */}
              <i className="fa fa-trash remove-product" aria-hidden="true"></i>
            </a>
          </div>
          <div className="quantity-adjust-container">
            <div className="quantity-add-container ">
              <a className="quantity-add minus" onClick={() => this.update(-1)}></a>
              <input type="text" 
                value={this.state.quantity}  
                className="cart-update-box input-box"
                disabled
                min={0}
                pattern="(500|([1-4][0-9][0-9])|([1-9][0-9])|[1-9])" 
                title="Quantity should contain only positive numerical values and be less than 500" 
              />
              <a className="quantity-add" onClick={() => this.update(1)}></a>
              <button className="add-cart-button">{}</button>
            </div>
          </div>
          <h5 className="cart-item-price">${cartItem.price.padEnd(5,'0')}</h5>

        </div>
      </div>
    )
  }
};

export default CartItem;