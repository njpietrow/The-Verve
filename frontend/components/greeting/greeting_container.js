import { connect } from "react-redux";
import Greeting from "./greeting"
import { toggleCartModal } from "../../actions/cart_modal_actions";


const quantity = cartItems => {
    let quantity = 0;
    for (const id in cartItems){
      quantity += parseInt(cartItems[id].quantity);
    }
    return quantity;
};

const mSTP = ({entities, session}) => ({
  currentUser: entities.users[session.id],
  cartItemQuantity: quantity(entities.cartItems)
});

const mDTP = dispatch => ({
  toggleCartModal: () => dispatch(toggleCartModal()),
})

export default connect(mSTP, mDTP)(Greeting);