import { connect } from "react-redux";
import Greeting from "./greeting"
import { toggleCartModal } from "../../actions/cart_modal_actions";


const mSTP = ({entities, session}) => ({
  currentUser: entities.users[session.id],
  
});

const mDTP = dispatch => ({
  toggleCartModal: () => dispatch(toggleCartModal()),
})

export default connect(mSTP, mDTP)(Greeting);