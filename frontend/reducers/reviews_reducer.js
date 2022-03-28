import { RECEIVE_PRODUCT } from "../actions/product_actions";
import { RECEIVE_REVIEW } from "../actions/review_form_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      if(action.reviews) nextState = action.reviews;
      return nextState;
    case RECEIVE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    default:
      return state;
  }
}

export default reviewsReducer;