import React from "react"

class AddToCartForm extends React.Component{
  render(){
    return(
      <form className="add-to-cart-form" onSubmit={this.handleSubmit}>
        <div className="selector-wrapper">
          <label htmlFor="size">Size</label>
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
        <div className="quantity-add-container">
          <a className="quantity-add">-</a>
          <input type="text" 
            defaultValue={0}  
            pattern="[0-9]*" 
            min={1} 
            title="Quantity should contain only numerical values" 
            size={5}
          />
          <a className="quantity-add">+</a>
          <button className="add-cart-button">Add to Cart</button>
        </div>
      </form>
    )
  }
};

export default AddToCartForm;

