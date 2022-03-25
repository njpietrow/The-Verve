@products.each do |product|
  json.set! product.id do
    
    # Eventually will add review rating to show on index
    json.extract! product, :id, :product_name, :ingredients, :location, :price
    
    json.photoUrl url_for(product.photo)

    json.type product.ingredients == "-" ? "gear" : "coffee"
  end
 end