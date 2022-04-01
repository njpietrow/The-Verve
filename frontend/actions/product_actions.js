import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProduct = (payload) => ({
  type: RECEIVE_PRODUCT,
  product: payload.product,
  reviews: payload.reviews
});

export const fetchProducts = (filters) => dispatch => {
  return ProductApiUtil.getProducts(filters)
    .then(products => dispatch(receiveProducts(products)))
};

export const fetchProduct = (productId) => dispatch => {
  return ProductApiUtil.getProduct(productId)
    .then(payload => dispatch(receiveProduct(payload)))
};

//for search bar
export const searchProducts = (filters) => {
  return ProductApiUtil.getProducts(filters)
};