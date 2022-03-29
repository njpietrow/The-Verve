import * as FormApiUtil from "../util/review_form_api_util";

//ACTION CONSTANTS
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";


// ACTION CREATORS
export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

// THUNK ACTION CREATORS
export const createReview = (review) => dispatch => {
  return FormApiUtil.createReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err.responseJSON))
    )
};