import React from "react";
import { Link } from "react-router-dom";

class ProductIndexItem extends React.Component{
  render(){
    const {product} = this.props;
    return(
      <li className="product-container">
        <img src={product.photoUrl} alt={`${product.productName}-image`} />
        <Link to="/"><h5>{product.productName}</h5></Link>
        <p>{product.ingredients}</p>
        {/* TODO: implement stars based on avg of review rating associations */}
        {/* <p>{product.stars}</p> */} 
        <p>{product.price}</p>
        <Link to="/">Add to Cart</Link>
      </li>
    )
  }
}

export default ProductIndexItem