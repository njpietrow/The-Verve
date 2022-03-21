json.extract! product, 
  :id, :product_name, :ingredients, :bag_size, 
  :grind, :description, :roast_level, :farm_story

json.photoUrl url_for(product.photo)