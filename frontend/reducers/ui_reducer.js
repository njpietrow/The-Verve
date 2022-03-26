import { combineReducers } from "redux";
import filterReducer from "./filter_reducer";
import cartModalReducer from "./cart_modal_reducer";

const uiReducer = combineReducers({
  filters: filterReducer,
  cartModal: cartModalReducer,
})

export default uiReducer;