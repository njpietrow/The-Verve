import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_actions"

const productReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      nextState =  Object.assign({}, action.products);
      return nextState;
    case RECEIVE_PRODUCT:
      nextState = Object.assign({}, state);
      nextState[action.product.id] = action.product
      return nextState;
    default:
      return state;
  }
};

export default productReducer;