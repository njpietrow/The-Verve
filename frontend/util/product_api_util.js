export const getProducts = (filters) => (
  $.ajax({
    method: 'GET',
    url: `/api/products`,
    data: {filters},
    error: (err) => console.log(err)
  })
);

export const getProduct = (productId) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${productId}`
  })
);