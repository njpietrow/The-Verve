import React from "react";
import {Link} from "react-router-dom"

class ProductShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId)
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
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
              onClick={() => updateFilter("category", "")}
            > coffee <span>&nbsp;&nbsp;/</span></Link>
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
              <h3>{product.location}</h3>
              <h1>{product.productName}</h1>
              <p className="product-show-item-ingredients">{product.ingredients}</p>
              <br />
              <p>stars</p>
              <br />
              <p>Price: {product.price}</p>
              <p>Select bag size: {product.bagSize}</p>
              
              <p>select grind: {product.grind} </p>
              <p>type/increment quantity: 0</p>
              <br />
              <button className="session-button">Add to Cart</button>
              <br />
              <p>{product.description}</p>
              <br />
              <div>
                this is the roast level: {product.roastLevel}
              </div>
              <br />
              <div>
                {product.farmStory}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductShow;