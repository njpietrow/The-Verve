import React from "react";
import {Link} from "react-router-dom"

class ProductShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId)
  }

  render(){
    const {product, updateFilter, category} = this.props;
    if (!product) return <span>Loading....</span>
    return(
      <div className="product-show-container">
        <div className="product-show-path-container">
          <div className="product-index-path-container">
            <Link to="/" className="product-index-path">Home <span>&nbsp;&nbsp;/</span></Link>
            <Link 
              to="/collections" 
              className="product-index-path"
            > coffee <span>&nbsp;&nbsp;/</span></Link>
            <span className="product-index-path last">
              {product.productName} 
            </span>
          </div>
        </div>

        <div className="product-show-content">
          <div className="product-show-content-photo">
            I am the product photo 
            <br />
            I should be center aligned and probably just fill the width
          </div>
          <div className="product-show-content-body">
            I am the product description.
            <br />
            Everything should be left-aligned here.
          </div>
        </div>
      </div>
    )
  }
}

export default ProductShow;