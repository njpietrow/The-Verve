import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS } from "../actions/review_form_actions";

const reviewErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEW:
      return {};
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default reviewErrorsReducer;
