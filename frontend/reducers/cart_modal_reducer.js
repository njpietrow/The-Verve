import { TOGGLE_CART_MODAL } from "../actions/cart_modal_actions";

const cartModalReducer = (state = false, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state);

  switch (action.type) {
    case TOGGLE_CART_MODAL:
      return !state
    default: 
      return state;
  }
};

export default cartModalReducer;