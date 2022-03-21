export const getProduct = (productId) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${productId}`
  })
);