import React from "react";
import {Link} from "react-router-dom"
import AddToCartFormContainer from "./add_to_cart_form_container";
import {titleCase} from "../../util/string_util"
import { HashLink } from "react-router-hash-link";
import ReviewIndexContainer from "../review_index/review_index_container";
import Stars from "../review_index/stars";

class ProductShow extends React.Component{

  constructor(props){
    super(props)
    this.updatePrice = this.updatePrice.bind(this);
    this.state = {
      price: "Loading..."
    };
  };

  updatePrice(multiplier){
    //function to calculate and update displayed price based on size of bag.
    let price = String((Number(this.props.product.price) * multiplier).toFixed(2)).padEnd(5,'0')
    this.setState({price})
  };

  componentDidUpdate(oldProps){
    //set price to a dummy placeholder until component information has been fetched.
    if(this.state.price === "Loading..."){
      this.setState({price: this.props.product.price})
    }
    
    if(oldProps.product?.id !== this.props.product?.id){
      this.props.fetchProduct(this.props.match.params.productId)
      window.scroll({top: 0, left: 0})
    }
  }
  
  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId)
    window.scroll({top: 0, left: 0})
  };
  
  getPathFromCategory(){
    let filter = this.props.category;
    if (filter === "") {
      filter = 'all-coffee'
    }
    return filter.replace('-', ' ');
  };

  getCollection(){
    const category = this.props.category;
    let section = "all-coffee";
    if (category === "all-gear" || category === "merch" || category === "brew" ||category === "mugs" ){
      section = "all-gear"
    }
    return section;
  };

  render(){
    const {product, updateFilter, category, averageRating} = this.props;
    if (!product) return <div style={{height: 800}}></div>
    document.title = titleCase(product.productName);
    let gear = (product.ingredients === "-");
    const section = this.getCollection();
    return(
      <div className="product-show-container">
        <div className="product-show-path-container">
          <div className="product-index-path-container">
            <Link to="/" className="product-index-path">Home <span>&nbsp;&nbsp;/</span></Link>
            <Link 
              to={section==="all-gear" ? "/collections/gear/all-gear" : "/collections/coffee/all-coffee" }
              className="product-index-path"
              onClick={() => updateFilter("category", section)}
            > {section.replace('all-', '')} <span>&nbsp;&nbsp;/</span></Link>
            <span className="product-index-path last">
              {product.productName} 
            </span>
          </div>
        </div>

        <div className="product-show-content">
          <div className="product-show-content-photo">
            {/* <img src={product.photoUrl} alt="product photo" className="product-show-image" /> */}
            <img src={"https://cdn.shopify.com/s/files/1/0035/9372/products/Nubianewcoffee_2048x2048.png?v=1645143809"} alt="product photo" className="product-show-image" />
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

              <HashLink 
                smooth 
                to={`/collections/${product.id}#review-index`}
              >
                <p className="product-show-stars">
                  <Stars averageRating={averageRating}/>
                  <span>&nbsp;</span>
                  <span className="num-ratings">({this.props.numRatings})</span>
                  </p>
              </HashLink>
              <p className="green show-page-price">{this.state.price.padEnd(5,'0')}</p>

              <AddToCartFormContainer 
                hasBag={!((product.bagSize === "none") || gear)}
                product={product}
                updatePrice={this.updatePrice}
                price={this.state.price.padEnd(5,'0')}
              />

              <div className="product-show-description"> 
                {product.description?.split('\n').map((text,idx) => <p key={idx}>{text}</p>)}
              </div>
              {gear ? (
                <div id="review-index"></div>
              ) : (
                <div className="product-show-roast-level">
                  <h3>ROAST LEVEL</h3>
                  <div id="review-index"></div>
                  {/* <img src={product.roastPhotoUrl} alt="roast level diagram" className="roast-photo"/> */}
                  placeholder to avoid s3 charges
                  <img src="https://www.cesix.inifap.gob.mx/js/frutalestropicales_old/map/anychart/help/docs/img/Samples/horizontal-thermometer-gauge-sample.png" alt="fake image" />
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
        <ReviewIndexContainer 
          key={product.id} 
          avgRating={product.avgRating} 
          productId={product.id}
        />
      </div>
    )
  }
}

export default ProductShow;