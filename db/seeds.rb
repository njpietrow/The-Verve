# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
ProductCategory.destroy_all
Product.destroy_all
Category.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('product_categories')
ActiveRecord::Base.connection.reset_pk_sequence!('products')
ActiveRecord::Base.connection.reset_pk_sequence!('categories')

User.create(email: "test@gmail.com", password: "password", first_name: "FirstName", last_name: "LastName")
User.create(email: "demo@email.com", password: "password", first_name: "Coffee", last_name: "Delight")

first_product = Product.create(
  product_name: "NUBIA LOAIZA",
  ingredients: "plants · n · stuff",
  location: "Colombia",
  price: 21.25,
  bag_size: "12 OZ",
  grind: "Whole Bean",
  description: "This is a good coffee",
  roast_level: 1,
  farm_story: "interesting farm story here"
)

second_product = Product.create(
  product_name: "AMPARO MAYA",
  ingredients: "good · ingredients",
  location: "Colombia",
  price: 22.00,
  bag_size: "100 OZ",
  grind: "Whole Bean",
  description: "coffee 2 description ...",
  roast_level: 9000,
  farm_story: "interesting farm story here"
)

third_product = Product.create(
  product_name: "BEDHATU JIBICHO",
  ingredients: "ingredients · that are · suspect",
  location: "Ethiopia",
  price: 21.25,
  bag_size: "12 OZ",
  grind: "Whole Bean",
  description: "coffee 3 descriptions.....",
  roast_level: 100,
  farm_story: "interesting farm story here"
)

fourth_product = Product.create(
  product_name: "MARIA BAIDE",
  ingredients: "WHITE PLUM · NECTARINE · SPICED CHOCOLATE",
  location: "HONDURAS",
  price: 22.75,
  bag_size: "12 OZ",
  grind: "Whole Bean",
  description: "coffee 4 descriptions.....",
  roast_level: 100,
  farm_story: "On the side of Mount Santa Barbara overlooking Lake Yojoa, you can find Maria Baide's small but mighty farm in Las Flores. With only 1.75 acres, Maria has created a place to wash and grow high-quality specialty coffee. She works closely with our Farmlevel partners at Benificio San Vicente, a nearby dry mill. The microclimate on the sid"
)

blend_product = Product.create(
  product_name: "WILDER SEASONAL BLEND COFFEE SET",
  ingredients: "CRAFT INSTANT · AND A · 12 OUNCE BAG",
  location: "SEASONAL BLEND",
  price: 32.00,
  bag_size: "none",
  grind: "none",
  description: "coffee 5 descriptions.....",
  roast_level: 3,
  farm_story: "Returning to our menu, Wilder Blend is our first seasonal blend of the year, marking a fresh start. While our single-origin offerings are roaste"
)

blend_product2 = Product.create(
  product_name: "WILDER BLEND",
  ingredients: "CANTALOUPE · WHITE CHERRY · HONEYSUCKLE",
  location: "SEASONAL BLEND",
  price: 20.75,
  bag_size: "12 OZ.",
  grind: "Drip / Medium",
  description: "Juicy notes of ripe cantaloupe balanced with sweet yet tart, white cherries are the first impressions of Wilder Blend. Floral honeysuckle adds an element both light and refreshing—the perfect coffee to take you into Spring.\n \n Wilder Blend is a perfect example of mixing Colombian and Ethiopian components, highlighting elements of both natural and washed coffees. Making its return to the menu for another year, previous lovers of this blend will be happy to experience another season of Wilder Blend.",
  roast_level: 5,
  farm_story: "Returning to our menu, Wilder Blend is our first seasonal blend of the year, marking a fresh start. While our single-origin offerings are roasted to highlight the unique and seasonal characteristics that make them individually special, our blends promise balance and consistency year-in, year-out. But, sometimes. We can't help but mash up what we think are two or three of our most delicious seasonal offerings to yield something with the uniqueness of a single-origin and a blends consistency. \n \n This seasonal blend combines two very different tasting coffees from two very distinct places, Colombia and Ethiopia. With both natural and washed components, this year's Wilder blend celebrates the best of both countries."
)

blend_product3 = Product.create(
  product_name: "WILDER BLEND CRAFT INSTANT COFFEE",
  ingredients: "CANTALOUPE · WHITE CHERRY · HONEYSUCKLE",
  location: "SEASONAL BLEND",
  price: 17.00,
  bag_size: "none",
  grind: "none",
  description: "Juicy notes of ripe cantaloupe balanced with sweet yet tart, white cherries are the first impressions of Wilder Blend. Floral honeysuckle adds an element both light and refreshing—the perfect coffee to take you into Spring. \n \n Wilder Blend is a perfect example of mixing Colombian and Ethiopian components, highlighting elements of both natural and washed coffees. Making its return to the menu for another year, previous lovers of this blend will be happy to experience another season of Wilder Blend.\n \n This ain't your grandma's instant coffee. The finest coffees in the world hand-roasted, small-batch brewed, and preserved for you.\n \n Add one packet of Verve Instant Craft Coffee into your mug along with 10 ounces of hot or cold liquid (water, milk, or milk alternative), give it a stir, and drink up. \n \n Makes 6 cups of coffee.",
  roast_level: 0,
  farm_story: "Returning to our menu, Wilder Blend is our first seasonal blend of the year, marking a fresh start. While our single-origin offerings are roasted to highlight the unique and seasonal characteristics that make them individually special, our blends promise balance and consistency year-in, year-out. But, sometimes. We can't help but mash up what we think are two or three of our most delicious seasonal offerings to yield something with the uniqueness of a single-origin and a blends consistency. \n \n This seasonal blend combines two very different tasting coffees from two very distinct places, Colombia and Ethiopia. With both natural and washed components, this year's Wilder blend celebrates the best of both countries."
)

file1 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Amparonewcoffee_1280x.jpg')
first_product.photo.attach(io: file1, filename: 'coffee1.jpg')

file2 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Bedhatunewcoffee_1280x.jpg')
second_product.photo.attach(io: file2, filename: 'coffee2.jpg')

file3 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Nubianewcoffee_1280x.jpg')
third_product.photo.attach(io: file3, filename: 'coffee3.jpg')

file4 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Marianewcoffee_1280x+(1).jpg')
fourth_product.photo.attach(io: file4, filename: 'coffee4.jpg')

file5 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/wilderblendset_2048x2048.webp')
blend_product.photo.attach(io: file5, filename: 'blend5.jpg')

file6 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/wilderblend_2048x2048.webp')
blend_product2.photo.attach(io: file6, filename: 'blend6.jpg')

file7 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/wilderblendinstant_2048x2048.webp')
blend_product3.photo.attach(io: file7, filename: 'blend7.jpg')

cat1 = Category.create(name: "single origin")
cat2 = Category.create(name: "new arrivals")
cat3 = Category.create(name: "blends")
cat4 = Category.create(name: "instant")
cat5 = Category.create(name: "gear")

ProductCategory.create(product_id: first_product.id, category_id: cat1.id)
ProductCategory.create(product_id: first_product.id, category_id: cat2.id)
ProductCategory.create(product_id: second_product.id, category_id: cat1.id)
ProductCategory.create(product_id: second_product.id, category_id: cat2.id)
ProductCategory.create(product_id: third_product.id, category_id: cat1.id)
ProductCategory.create(product_id: third_product.id, category_id: cat2.id)
ProductCategory.create(product_id: fourth_product.id, category_id: cat1.id)
ProductCategory.create(product_id: fourth_product.id, category_id: cat2.id)
ProductCategory.create(product_id: blend_product.id, category_id: cat3.id)
ProductCategory.create(product_id: blend_product2.id, category_id: cat3.id)
ProductCategory.create(product_id: blend_product3.id, category_id: cat3.id)
ProductCategory.create(product_id: blend_product3.id, category_id: cat4.id)

