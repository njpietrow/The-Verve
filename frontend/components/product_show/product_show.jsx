import React from "react";
import {Link} from "react-router-dom"
import AddToCartForm from "./add_to_cart_form"
import {titleCase} from "../../util/string_util"

class ProductShow extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId)
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  
  getPathFromCategory(){
    let filter = this.props.category;
    if (filter === "") {
      filter = 'all coffee'
    }
    return filter.replace('-', ' ');
  }
  
  
  //need to treat gear and cofee products differently.
  render(){
    const {product, updateFilter, category} = this.props;
    if (!product) return <span>Loading....</span>
    document.title = titleCase(product.productName);
    let gear = (product.ingredients === "-");
    return(
      <div className="product-show-container">
        <div className="product-show-path-container">
          <div className="product-index-path-container">
            <Link to="/" className="product-index-path">Home <span>&nbsp;&nbsp;/</span></Link>
            <Link 
              to="/collections" 
              className="product-index-path"
              onClick={() => updateFilter("category", "cofee")}
            > collections <span>&nbsp;&nbsp;/</span></Link>
            <Link 
              to="/collections" 
              className="product-index-path"
              onClick={() => updateFilter("category", category)}
             >{this.getPathFromCategory()} 
              <span>&nbsp;&nbsp;/</span>
            </Link>
            <span className="product-index-path last">
              {product.productName} 
            </span>
          </div>
        </div>

        <div className="product-show-content">
          <div className="product-show-content-photo">
            <img src={product.photoUrl} alt="product photo" className="product-show-image" />
          </div>
          <div className="product-show-content-body-container">
            <div className="product-show-content-body">
              {gear ? (
                <h1 className="product-show-title">{product.productName}</h1>
              ) : (
                <div>
                  <h3 className="product-show-location">{product.location}</h3>
                  <h1 className="product-show-title">{product.productName}</h1>
                  <p className="product-show-item-ingredients">{product.ingredients}</p>
                </div>
              )}

              <p className="product-show-stars">stars --should link to the reviews section of the page--</p>
              <p className="green show-page-price">{product.price.padEnd(5,'0')}</p>

              <AddToCartForm hasBag={!((product.bagSize === "none") || gear)}/>

              <div className="product-show-description"> 
                {product.description?.split('\n').map((text,idx) => <p key={idx}>{text}</p>)}
              </div>
              {gear ? (
                null
              ) : (
                <div className="product-show-roast-level">
                  <h3>ROAST LEVEL</h3>
                  <img src={product.roastPhotoUrl} alt="roast level diagram" className="roast-photo"/>
                  <br />
                </div>
              )}
           
              {/* <div className="product-show-farm-story">
                <p>
                  {product.farmStory}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductShow;