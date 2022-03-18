import { connect } from "react-redux";
import SessionForm from "./session_form";
import { register, clearSessionErrors } from "../../actions/session_actions";

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    formType: "Register"  
  }
};

const mDTP = dispatch => ({
  processForm: (user) => dispatch(register(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
})

export default connect(mSTP, mDTP)(SessionForm);