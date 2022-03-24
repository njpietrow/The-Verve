import React from "react"

class AddToCartForm extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      quantity: 0,
    };
  }

  handleSubmit(e){
    e.preventDefault();  
  }

  updateQuantity(value){
    if (this.state.quantity <= 0 && value< 1) return
    this.setState({quantity: (parseInt(this.state.quantity) + value)})
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return(
      <form className="add-to-cart-form" onSubmit={this.handleSubmit}>
        { this.props.hasBag ? (
          <div>
            <div className="selector-wrapper">
              <label htmlFor="size">Bag Size</label>
              <select name="size">
                <option value="12 oz.">12 oz.</option>
                <option value="1 Kilo">1 Kilo</option>
                <option value="5 Lbs. (Save 15%)">5 Lbs. (Save 15%)</option>
              </select>
            </div>
            <div className="selector-wrapper">
              <label htmlFor="grind">Grind</label>
              <select name="grind">
                <option value="Whole Bean">Whole Bean</option>
                <option value="Drip / Medium">1 Kilo</option>
                <option value="5 Lbs. (Save 15%)">5 Lbs. (Save 15%)</option>
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

