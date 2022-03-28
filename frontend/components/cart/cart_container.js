import { connect } from "react-redux";
import Cart from "./cart";
import { toggleCartModal } from "../../actions/cart_modal_actions";
import { checkout } from "../../actions/cart_item_actions";
import { updateFilter } from "../../actions/filter_actions";

const subtotal = (cartItems) => {
  let subtotal = 0;
    for (const id in cartItems){
      subtotal += parseFloat(cartItems[id].price) * parseInt(cartItems[id].quantity);
    }
    return subtotal;
};

const quantity = (cartItems) => {
  let quantity = 0;
    for (const id in cartItems){
      quantity += (cartItems[id].quantity);
    }
    return quantity;
};

const mSTP = state => {
  return {
    cartItems: state.entities.cartItems,
    visible: state.ui.cartModal,
    subtotal: subtotal(state.entities.cartItems),
    quantity: quantity(state.entities.cartItems)
  }
};

const mDTP = dispatch => ({
  toggleCartModal: () => dispatch(toggleCartModal()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  checkout: () => dispatch(checkout()),
});

export default connect(mSTP, mDTP)(Cart)

