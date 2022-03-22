import { fetchProducts } from "./product_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";

const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  }
}

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchProducts(getState().ui.filters)(dispatch);
};
