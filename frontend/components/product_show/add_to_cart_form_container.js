import { connect } from "react-redux";
import AddToCartForm from "./add_to_cart_form";
import { toggleCartModal } from "../../actions/cart_modal_actions";
import { addCartItem } from "../../actions/cart_item_actions";

const mDTP = dispatch => ({
  toggleCartModal: () => dispatch(toggleCartModal()),
  addCartItem: (item, quantity) => dispatch(addCartItem(item, quantity)),
})

export default connect(null, mDTP)(AddToCartForm);