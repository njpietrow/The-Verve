import { connect } from "react-redux";
import CartItem from "./cart_item";
import { removeCartItem } from "../../actions/cart_item_actions";
import { toggleCartModal } from "../../actions/cart_modal_actions";

const mSTP = state => ({

});

const mDTP = dispatch => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  toggleCartModal: () => dispatch(toggleCartModal()),
});

export default connect(mSTP, mDTP)(CartItem);