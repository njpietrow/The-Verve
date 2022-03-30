import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { averageRating } from "../../util/string_util";
import { createLike } from "../../actions/like_actions";
import { clearLikeErrors } from "../../actions/like_actions";
import { withRouter } from "react-router";

const mSTP = state => ({
  reviews: state.entities.reviews,
  currentUserId: state.session.id,
  averageRating: averageRating(Object.values(state.entities.reviews)),
  likeErrors: Object.values(state.errors.like)
  // need to get the average rating from the state because 
});

const mDTP = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  clearLikeErrors: () => dispatch(clearLikeErrors()),
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));