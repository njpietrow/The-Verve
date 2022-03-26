import React from "react"
import ProductIndexItem from "./product_index_item"
import { Link } from "react-router-dom"

class ProductIndex extends React.Component{
  // Don't need to fetch products upon mounting, because this will be handled by
  // the update filter action upon clicking on header links.
  componentDidMount(){
    console.log(this.props.category)
    console.log(this.props)
    // this.props.fetchProducts(this.props.category)
  }

  // scroll window back to top after changing filters for products.
  componentDidUpdate(oldProps){
    if(
      (JSON.stringify(oldProps.products) !== JSON.stringify(this.props.products))
      || (oldProps.location.pathname !== this.props.location.pathname)
    ){
      // this.props.fetchProducts(this.props.category)
      window.scroll({top: 0, left: 0, behavior: 'smooth' })
    } 
  }
  
  endOfPath(){
    let filter = this.props.category
    if (filter === "coffee") filter = 'all coffee'
    if (filter === "gear") filter = 'all gear'
    return (
      <span className="product-index-path last">
        {filter.replace('-', ' ')} 
      </span>
    )
  }

  render(){
    const {products, updateFilter, category, toggleCartModal, addCartItem} = this.props
    let section = "coffee";
    if (category === "gear" || category === "merch" || category === "brew"){
      section = "gear"
    }
    document.title = "Verve";
    return(
      <div className="product-index-container">
        <div className="product-index-path-container" >
          <Link to="/" className="product-index-path">Home <span>&nbsp;&nbsp;/</span></Link>
          <Link 
            to={category==="gear" ? "/collections/gear/all-gear" : "/collections/coffee/all-coffee" }
            className="product-index-path"
            onClick={() => updateFilter("category", section)}
          >Collections <span>&nbsp;&nbsp;/</span></Link>
          {this.endOfPath()}
        </div>
         
        <div className="product-index-content-container">
          {products.map( product => (
              <ProductIndexItem 
                key={product.id} 
                product={product}
                toggleCartModal={toggleCartModal}
                addCartItem={addCartItem}
              />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductIndex;