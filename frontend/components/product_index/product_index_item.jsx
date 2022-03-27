import React from "react";
import { Link } from "react-router-dom";
import { addCartItem } from "../../actions/cart_item_actions";
import { toggleCartModal } from "../../actions/cart_modal_actions";

class ProductIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  };

  handleAddToCart(){
    const {toggleCartModal, addCartItem} = this.props;
    // When adding items to the cart from the index don't update the cart modal.
    //should only update the number next to the cart button
    // toggleCartModal();
    const product = Object.assign({}, this.props.product)
    addCartItem(product,1);
  };

  render(){
    const {product} = this.props;
    return(
      <div className="product-index-item-container">
          <Link 
            to={`/collections/${product.id}`}
            className="product-index-item-photo"
          >
            <img
              className="product-index-img" 
              // src={product.photoUrl} 
              src={"https://cdn.shopify.com/s/files/1/0035/9372/products/Nubianewcoffee_2048x2048.png?v=1645143809"}
              alt={`${product.productName}-img`}   
            />
          </Link>
        <Link 
          to={`/collections/${product.id}`}
          className="product-index-item-title"
        >
          {product.type === "coffee" ? ( 
            <>
              <h4>{product.location}</h4>
              —
            </>
          ) : (
            null
          )}
          <h5>{product.productName}</h5>
        </Link>
        {product.type === "coffee" ? ( 
          <p className="product-index-item-ingredients">{product.ingredients}</p>
        ) : (
          null
        )}
        <p>--stars--</p>
        {/* TODO: if product has a rating, implement stars based on avg of review rating associations */}

        <div>
          <span className="green index-price">{product.price.padEnd(5,'0')} / </span>
          <a 
            className="orange"
            onClick={() => this.handleAddToCart() }
          >Add to Cart</a>
        </div>
      </div>
    )
  }
}

export default ProductIndexItem