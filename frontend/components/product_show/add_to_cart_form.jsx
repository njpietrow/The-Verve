import React from "react"

class AddToCartForm extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      quantity: 1,
      bagSize: "12 oz.",
      grind: "Whole Bean",
    };
  }

  handleSubmit(e){
    e.preventDefault();  
    const {toggleCartModal, addCartItem, hasBag} = this.props;
    toggleCartModal();
    let bagAttr = {hasBag}
    if (hasBag) {
      bagAttr = {
        size: this.state.bagSize,
        quantity: this.state.quantity, 
        hasBag
      };
    }
    let product = Object.assign({}, this.props.product, bagAttr);
    addCartItem(product,parseInt(this.state.quantity));
  };

  updateQuantity(value){
    if (this.state.quantity <= 1 && value < 1) return
    this.setState({quantity: (parseInt(this.state.quantity) + parseInt(value))})
  };

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  };


  render(){
    return(
      <form className="add-to-cart-form" onSubmit={this.handleSubmit}>
        { this.props.hasBag ? (
          <div>
            <div className="selector-wrapper">
              <label htmlFor="bagSize">Bag Size</label>
              <select 
                name="bagSize" 
                value={this.state.bagSize} 
                onChange={this.update("bagSize")}
              >
                <option value="12 oz.">12 oz.</option>
                <option value="1 Kilo">1 Kilo</option>
                <option value="5 Lbs. (Save 15%)">5 Lbs. (Save 15%)</option>
              </select>
            </div>
            <div className="selector-wrapper">
              <label htmlFor="grind">Grind</label>
              <select 
                name="grind" 
                value={this.state.grind} 
                onChange={this.update("grind")}
              >
                <option value="Whole Bean">Whole Bean</option>
                <option value="Drip / Medium">Drip / Medium</option>
              </select>
            </div>
          </div>
        ) : (
          null)
        }
        
        <div className="quantity-add-container">
          <a className="quantity-add minus" onClick={() => this.updateQuantity(-1)}></a>
          <input type="text" 
            value={this.state.quantity}  
            pattern="(500|([1-4][0-9][0-9])|([1-9][0-9])|[1-9])" 
            title="Quantity should contain only positive numerical values and be less than 500" 
            onChange={this.update("quantity")}
          />
          <a className="quantity-add" onClick={() => this.updateQuantity(1)}></a>
          <button className="add-cart-button">Add to Cart</button>
        </div>
      </form>
    )
  }
};

export default AddToCartForm;

