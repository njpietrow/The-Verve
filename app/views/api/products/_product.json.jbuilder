json.extract! product, 
  :id, :product_name, :ingredients, :bag_size, 
  :grind, :description,
  :location, :price

json.photoUrl url_for(product.photo)
json.roastPhotoUrl url_for(product.roast_level_photo)