@products.each do |product|
  json.set! product.id do
    
    # Eventually will add review rating to show on index
    json.extract! product, :id, :product_name, :ingredients, :location, 
      :price, :bag_size, :grind
    
    json.photoUrl url_for(product.photo)

    json.type product.ingredients == "-" ? "gear" : "coffee"

    total_stars = 0.0
    num_reviews = 0.0

    product.reviews.each do |review|
      total_stars += review.stars
      num_reviews += 1
    end

    json.avg_rating (total_stars/num_reviews).round(2)
  end
 end
