import React from "react"
import ProductIndexItem from "./product_index_item"

class ProductIndex extends React.Component{
  componentDidMount(){
    this.props.fetchProducts()
  }

  render(){
    const {products} = this.props
    return(
      <div className="product-index-container">
        <ul className="product-index-content-container">
          {products.map( product => (
              <ProductIndexItem 
                key={product.id} 
                product={product}
              />
          ))}
        </ul>
      </div>
    )
  }
}

export default ProductIndex;