import { connect } from "react-redux";
import SessionForm from "./session_form";
import { logIn, clearSessionErrors } from "../../actions/session_actions";

const demoUser = {
  "email": "DemoUser@gmail.com", "password": "password" 
}

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "Sign In"
});

const mDTP = dispatch => ({
  processForm: (user) => dispatch(logIn(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  loginDemo: () => dispatch(logIn(demoUser)),
})

export default connect(mSTP, mDTP)(SessionForm);