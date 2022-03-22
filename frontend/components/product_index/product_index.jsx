import React from "react"
import ProductIndexItem from "./product_index_item"
import { Link } from "react-router-dom"

class ProductIndex extends React.Component{
  componentDidMount(){
    this.props.fetchProducts()
  }

  render(){
    const {products} = this.props
    return(
      <div className="product-index-container">
        <div className="product-index-path-container" >
          <Link to="/" className="product-index-path">Home <span>&nbsp;&nbsp;/</span></Link>
          <Link to="/" className="product-index-path">Collections <span>&nbsp;&nbsp;/</span></Link>
          <Link to="/" className="product-index-path">All Coffee</Link>
        </div>
         
        <div className="product-index-content-container">
          {products.map( product => (
              <ProductIndexItem 
                key={product.id} 
                product={product}
              />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductIndex;