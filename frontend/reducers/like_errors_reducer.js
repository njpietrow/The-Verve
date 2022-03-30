import { RECEIVE_LIKE_ERRORS, CLEAR_LIKE_ERRORS } from "../actions/like_actions";
import { RECEIVE_REVIEW } from "../actions/review_form_actions";

const likeErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEW:
      return {};
    case RECEIVE_LIKE_ERRORS:
      return action.errors;
    case CLEAR_LIKE_ERRORS:
      return {};
    default:
      return state;
  }
};

export default likeErrorsReducer;
