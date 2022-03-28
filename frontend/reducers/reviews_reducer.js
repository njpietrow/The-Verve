import { RECEIVE_PRODUCT } from "../actions/product_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      nextState = action.reviews
      return nextState
    default:
      return state;
  }
}

export default reviewsReducer;