json.extract! product, 
  :id, :product_name, :ingredients, :bag_size, 
  :grind, :description,
  :location, :price

json.photoUrl url_for(product.photo)

if (product.roast_level_photo.attached?) 
  json.roastPhotoUrl url_for(product.roast_level_photo) 
end

json.type product.ingredients == "-" ? "gear" : "coffee"

total_stars = 0.0
num_reviews = 0.0
# arr = []

product.reviews.each do |review|
  total_stars += review.stars
  num_reviews += 1
  # arr << review.id
end

# json.reviews do 
#   json.array! arr
# end


json.avg_rating (total_stars/num_reviews).round(2)