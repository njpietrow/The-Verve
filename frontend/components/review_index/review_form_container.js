import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_form_actions"
import { withRouter } from "react-router";
import { clearReviewErrors } from "../../actions/review_form_actions";

const mSTP = (state) => ({
  currentUserId: state.session.id,
  errors: Object.values(state.errors.review),
})

const mDTP = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
  clearReviewErrors: () => dispatch(clearReviewErrors()),
});

export default withRouter(connect(mSTP,mDTP)(ReviewForm));