import { connect } from "react-redux";
import CartIndex from "./cart_index";

const mSTP = state => {
  return {
    cartItems: state.entities.cartItems
  }
};

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(CartIndex)

