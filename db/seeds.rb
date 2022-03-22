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

User.create(email: "test@gmail.com", password: "password", first_name: "FirstName", last_name: "LastName")
User.create(email: "demo@email.com", password: "password", first_name: "Coffee", last_name: "Delight")

first_product = Product.create(
  product_name: "NUBIA LOAIZA",
  ingredients: "plants · n · stuff",
  location: "Colombia",
  price: 21.25,
  bag_size: "12 OZ",
  grind: "medium",
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
  grind: "large",
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
  grind: "small",
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
  grind: "small",
  description: "coffee 4 descriptions.....",
  roast_level: 100,
  farm_story: "On the side of Mount Santa Barbara overlooking Lake Yojoa, you can find Maria Baide's small but mighty farm in Las Flores. With only 1.75 acres, Maria has created a place to wash and grow high-quality specialty coffee. She works closely with our Farmlevel partners at Benificio San Vicente, a nearby dry mill. The microclimate on the sid"
)

blend_product = Product.create(
  product_name: "WILDER SEASONAL BLEND COFFEE SET",
  ingredients: "CRAFT INSTANT · AND A · 12 OUNCE BAG",
  location: "SEASONAL BLEND",
  price: 32.00,
  bag_size: "12 OZ.",
  grind: "Whole Bean",
  description: "coffee 5 descriptions.....",
  roast_level: 3,
  farm_story: "Returning to our menu, Wilder Blend is our first seasonal blend of the year, marking a fresh start. While our single-origin offerings are roaste"
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

cat1 = Category.create(name: "single origin")
cat2 = Category.create(name: "new")
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
ProductCategory.create(product_id: blend_product.id, category_id: cat3.id)


