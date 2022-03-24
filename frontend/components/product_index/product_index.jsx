import React from "react"
import ProductIndexItem from "./product_index_item"
import { Link } from "react-router-dom"

class ProductIndex extends React.Component{
  componentDidMount(){
    this.props.fetchProducts()
  }

  // scroll window back to top after changing filters for products.
  componentDidUpdate(){
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  endOfPath(){
    let filter = this.props.category
    if (filter === "") filter = 'all coffee'
    return (
      <span className="product-index-path last">
        {filter.replace('-', ' ')} 
      </span>
    )
  }

  render(){
    const {products, updateFilter} = this.props
    return(
      <div className="product-index-container">
        <div className="product-index-path-container" >
          <Link to="/" className="product-index-path">Home <span>&nbsp;&nbsp;/</span></Link>
          <Link 
            to="/collections" 
            className="product-index-path"
            onClick={() => updateFilter("category", "")}
          >Collections <span>&nbsp;&nbsp;/</span></Link>
          {this.endOfPath()}
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