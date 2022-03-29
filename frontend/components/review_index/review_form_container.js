import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_form_actions"

const mSTP = (state) => ({
  currentUserId: state.session.id,
  errors: Object.values(state.errors.review),
})

const mDTP = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
});

export default connect(mSTP,mDTP)(ReviewForm);