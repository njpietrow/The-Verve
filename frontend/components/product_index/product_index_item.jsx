import React from "react";
import { Link } from "react-router-dom";

class ProductIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = {
      cartAddButtonTitle: "Add to Cart",
      color: "#e65400"
    };
  };

  componentWillUnmount(){
    if (this.timer) {                          
      clearTimeout(this.timer);      
      this.timer = 0;               
    }   
  }

  handleAddToCart(){
    const {toggleCartModal, addCartItem,product} = this.props;
    this.setState({
      cartAddButtonTitle: "Added to Cart ✔", 
      color: "#b1bd76",
    });

    this.timer = setTimeout(() => {
      this.setState({
        cartAddButtonTitle: "Add to Cart", 
        color: "#e65400",
      });
    }, 2000);

    //if product has a bag, add attributes to the item before adding to cart
    let hasBag = !((product.bagSize === "none") || (product.type === "gear"))
    let bagAttr = {hasBag}

    const adjustedProduct = Object.assign({}, this.props.product, bagAttr)
    addCartItem(adjustedProduct,1);
  };

  render(){
    const {product} = this.props;
    return(
      <div className="product-index-item-container">
          <Link 
            to={`/collections/${product.id}`}
            className="product-index-item-photo"
          >
            <img
              className="product-index-img" 
              // src={product.photoUrl} 
              src={"https://cdn.shopify.com/s/files/1/0035/9372/products/Nubianewcoffee_2048x2048.png?v=1645143809"}
              alt={`${product.productName}-img`}   
            />
          </Link>
        <Link 
          to={`/collections/${product.id}`}
          className="product-index-item-title"
        >
          {product.type === "coffee" ? ( 
            <>
              <h4>{product.location}</h4>
              —
            </>
          ) : (
            null
          )}
          <h5>{product.productName}</h5>
        </Link>
        {product.type === "coffee" ? ( 
          <p className="product-index-item-ingredients">{product.ingredients}</p>
        ) : (
          null
        )}
        <p>{product.avgRating ? `${product.avgRating} stars` : null}</p>
        {/* TODO: if product has a rating, implement stars based on avg of review rating associations */}

        <div>
          <span className="green index-price">{product.price.padEnd(5,'0')} / </span>
          <a 
            className="orange"
            onClick={() => this.handleAddToCart() }
            style={{color: this.state.color}}
          >{this.state.cartAddButtonTitle}</a>
        </div>
      </div>
    )
  }
}

export default ProductIndexItem