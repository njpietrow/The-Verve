import { connect } from "react-redux";
import CartItem from "./cart_item";
import { removeCartItem } from "../../actions/cart_item_actions";
import { toggleCartModal } from "../../actions/cart_modal_actions";
import { updateCartItem } from "../../actions/cart_item_actions";

const mSTP = state => ({});

const mDTP = dispatch => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  toggleCartModal: () => dispatch(toggleCartModal()),
  updateCartItem: (item, quantity) => dispatch(updateCartItem(item, quantity))
});

export default connect(mSTP, mDTP)(CartItem);