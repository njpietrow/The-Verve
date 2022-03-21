# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Product.destroy_all

User.create(email: "test@gmail.com", password: "password", first_name: "FirstName", last_name: "LastName")
User.create(email: "demo@email.com", password: "password", first_name: "Coffee", last_name: "Delight")

first_product = Product.create(
  product_name: "coffee 1",
  ingredients: "plants n stuff",
  bag_size: "10.5 OZ",
  grind: "medium",
  description: "This is a good coffee",
  roast_level: 1,
  farm_story: "interesting farm story here"
)

file = open('https://the-verve-dev.s3.us-west-1.amazonaws.com/YBpnDDDZohfjZaSQnA6KtrnR')
first_product.photo.attach(io: file, filename: 'cat.jpg')
