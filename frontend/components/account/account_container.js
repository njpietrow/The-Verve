import { connect } from "react-redux";
import { logOut } from "../../actions/session_actions";
import Account from "./account";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

export default connect(mSTP, mDTP)(Account);