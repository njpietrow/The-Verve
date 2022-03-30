import { receiveReview, receiveReviewErrors } from "./review_form_actions";
import * as LikeApiUtil from "../util/like_api_util"

export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";
export const CLEAR_LIKE_ERRORS = 'CLEAR_LIKE_ERRORS';


export const receiveLikeErrors = (errors) => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});

export const clearLikeErrors = () => ({
  type: CLEAR_LIKE_ERRORS
});


export const createLike = like => dispatch => {
  return (LikeApiUtil.createLike(like)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveLikeErrors(err.responseJSON))
    )
  )
};