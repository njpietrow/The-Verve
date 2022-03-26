import { connect } from "react-redux";
import CartIndex from "./cart_index";
import { toggleCartModal } from "../../actions/cart_modal_actions";
import { checkout } from "../../actions/cart_item_actions";

const subtotal = (cartItems) => {
  let subtotal = 0;
    for (const id in cartItems){
      subtotal += parseFloat(cartItems[id].price) * parseInt(cartItems[id].quantity);
    }
    return subtotal;
};

// const quantity = cartItems => {
//     let quantity = 0;
//     for (const id in cartItems){
//       quantity += parseInt(cartItems[id].quantity);
//     }
//     return quantity;
// };

const mSTP = state => {
  return {
    cartItems: state.entities.cartItems,
    visible: state.ui.cartModal,
    // quantity: quantity(state.entities.cartItems),
    subtotal: subtotal(state.entities.cartItems)
  }
};

const mDTP = dispatch => ({
  toggleCartModal: () => dispatch(toggleCartModal()),
  checkout: () => dispatch(checkout()),
});

export default connect(mSTP, mDTP)(CartIndex)

