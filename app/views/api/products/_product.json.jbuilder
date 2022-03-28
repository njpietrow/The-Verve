json.extract! product, 
  :id, :product_name, :ingredients, :bag_size, 
  :grind, :description,
  :location, :price

# json.photoUrl url_for(product.photo)

# if (product.roast_level_photo.attached?) 
#   json.roastPhotoUrl url_for(product.roast_level_photo) 
# end

json.type product.ingredients == "-" ? "gear" : "coffee"

json.reviews do
  product.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id
    end
  end
end
  