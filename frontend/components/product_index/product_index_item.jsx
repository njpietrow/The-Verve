import React from "react";
import { Link } from "react-router-dom";

class ProductIndexItem extends React.Component{
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
              src={product.photoUrl} 
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
          <Link to="/" className="orange">Add to Cart</Link>
        </div>
      </div>
    )
  }
}

export default ProductIndexItem