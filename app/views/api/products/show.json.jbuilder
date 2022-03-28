json.product do
  json.partial! 'api/products/product', product: @product
end

json.reviews({})

json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do 
      json.extract! review, :id, :title, :body, :stars, :product_id
      json.reviewer review.reviewer.email
    end
  end
end


