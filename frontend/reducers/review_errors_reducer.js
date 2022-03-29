import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS } from "../actions/review_form_actions";

const reviewErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEW:
      return {};
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case CLEAR_REVIEW_ERRORS:
      return {};
    default:
      return state;
  }
};

export default reviewErrorsReducer;
