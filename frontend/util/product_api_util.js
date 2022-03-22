export const getProducts = (category) => (
  $.ajax({
    method: 'GET',
    url: `/api/products`,
    data: {category},
    error: (err) => console.log(err)
  })
);

export const getProduct = (productId) => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${productId}`
  })
);