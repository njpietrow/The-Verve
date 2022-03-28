export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
import * as FormApiUtil from "../util/review_form_api_util";

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const createReview = (review) => dispatch => {
  return FormApiUtil.createReview(review)
    .then((review) => dispatch(receiveReview(review)))
};