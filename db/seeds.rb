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

second_product = Product.create(
  product_name: "coffee 2",
  ingredients: "good ingredients",
  bag_size: "100 OZ",
  grind: "large",
  description: "coffee 2 description ...",
  roast_level: 9000,
  farm_story: "interesting farm story here"
)

third_product = Product.create(
  product_name: "coffee 3",
  ingredients: "ingredients that are suspect",
  bag_size: "20 OZ",
  grind: "small",
  description: "coffee 3 descriptions.....",
  roast_level: 100,
  farm_story: "interesting farm story here"
)

file1 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Amparonewcoffee_1280x.jpg')
first_product.photo.attach(io: file1, filename: 'coffee1.jpg')

file2 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Bedhatunewcoffee_1280x.jpg')
second_product.photo.attach(io: file2, filename: 'coffee2.jpg')

file3 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Nubianewcoffee_1280x.jpg')
third_product.photo.attach(io: file3, filename: 'coffee3.jpg')
