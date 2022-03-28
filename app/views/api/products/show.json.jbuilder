json.product do
  json.partial! 'api/products/product', product: @product
end

json.reviews({})

json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do 
      json.partial! "/api/reviews/review", review: review
    end
  end
end


