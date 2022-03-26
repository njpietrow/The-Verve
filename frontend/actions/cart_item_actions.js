export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const CHECKOUT = "CHECKOUT";

export const addCartItem = (item, quantity) => ({
  type: ADD_CART_ITEM,
  item,
  quantity
});

export const updateCartItem = (item, quantity) => ({
  type: UPDATE_CART_ITEM,
  item,
  quantity
});

export const removeCartItem = (item) => ({
  type: REMOVE_CART_ITEM,
  item
});

export const checkout = () => ({
  type: CHECKOUT
});