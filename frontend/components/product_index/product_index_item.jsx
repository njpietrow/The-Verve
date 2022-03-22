import React from "react";
import { Link } from "react-router-dom";

class ProductIndexItem extends React.Component{
  render(){
    const {product} = this.props;
    return(
      <div className="product-index-item-container">
        <img
          className="product-index-img" 
          src={product.photoUrl} 
          alt={`${product.productName}-img`}   
        />
        <Link 
          to={`/products/${product.id}`}
          className="product-index-item-title"
        >
          <h4>{product.location}</h4>
          —
          <h5>{product.productName}</h5>
        </Link>
        <p className="product-index-item-ingredients">{product.ingredients}</p>

        {/* TODO: if product has a rating, implement stars based on avg of review rating associations */}

        <div>
          <span className="green index-price">${product.price.padEnd(5,'0')} / </span>
          <Link to="/" className="orange">Add to Cart</Link>
        </div>
      </div>
    )
  }
}

export default ProductIndexItem