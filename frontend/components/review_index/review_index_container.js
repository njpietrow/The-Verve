import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { averageRating } from "../../util/string_util";

const mSTP = state => ({
  reviews: state.entities.reviews,
  loggedIn: !!state.session.id,
  averageRating: averageRating(Object.values(state.entities.reviews)),
  // need to get the average rating from the state because 
});

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(ReviewIndex);