import { connect } from "react-redux";
import SessionForm from "./session_form";
import { logIn, clearSessionErrors } from "../../actions/session_actions";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "Sign In"
});

const mDTP = dispatch => ({
  processForm: (user) => dispatch(logIn(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
})

export default connect(mSTP, mDTP)(SessionForm);