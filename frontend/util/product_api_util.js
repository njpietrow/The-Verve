export const getProducts= () => (
  $.ajax({
    method: 'GET',
    url: `/api/products`
  })
);

export const getProduct = (productId) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${productId}`
  })
);