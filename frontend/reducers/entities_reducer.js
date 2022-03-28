import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productReducer from "./products_reducer";
import cartItemsReducer from "./cart_items_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  cartItems: cartItemsReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;