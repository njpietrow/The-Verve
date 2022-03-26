import React from "react"
import ProductIndexItem from "./product_index_item"
import { Link } from "react-router-dom"
import { titleCase } from "../../util/string_util";

class ProductIndex extends React.Component{

  componentDidMount(){
    this.props.fetchProducts({category: this.props.category})

    this.unlisten = this.props.history.listen((location, action) => {
      var n = location.pathname.lastIndexOf('/');
      var result = location.pathname.substring(n + 1);
      this.props.fetchProducts({category: result})
    });
  }

  componentWillUnmount() {
    this.unlisten();
    //not ideal, but the product index needs to continue listening after 
    //the product show pops up
  }  

  // scroll window back to top after changing filters for products.
  componentDidUpdate(oldProps){
    if(
      (JSON.stringify(oldProps.products) !== JSON.stringify(this.props.products))
      || (oldProps.location.pathname !== this.props.location.pathname)
    ){
      window.scroll({top: 0, left: 0, behavior: 'smooth' })
    } 
  }
  
  endOfPath(){
    let filter = this.props.category
    if (filter === "all-coffee") filter = 'all coffee'
    if (filter === "gear") filter = 'all gear'
    return (
      <span className="product-index-path last">
        {filter.replace('-', ' ')} 
      </span>
    )
  }

  endOfPathString(){
    let filter = this.props.category
    if (filter === "all-coffee") filter = 'all coffee'
    if (filter === "gear") filter = 'all gear'
    return titleCase(filter.replace('-', ' '))
  }

  getCollection(){
    const category = this.props.category;
    let section = "all-coffee";
    if (category === "all-gear" || category === "merch" || category === "brew" ||category === "mugs" ){
      section = "all-gear"
    }
    return section;
  }
  

  render(){
    const {products, updateFilter, category, toggleCartModal, addCartItem} = this.props
    const section = this.getCollection();
    document.title = this.endOfPathString();
    return(
      <div className="product-index-container">
        <div className="product-index-path-container" >
          <Link to="/" className="product-index-path">Home <span>&nbsp;&nbsp;/</span></Link>
          <Link 
            to={section==="all-gear" ? "/collections/gear/all-gear" : "/collections/coffee/all-coffee" }
            className="product-index-path"
            onClick={() => updateFilter("category", section)}
          > {titleCase(this.getCollection().replace('all-', ''))} <span>&nbsp;&nbsp;/</span></Link>
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