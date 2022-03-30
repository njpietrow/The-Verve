# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  ingredients  :string           not null
#  bag_size     :string           not null
#  grind        :string           not null
#  description  :text             not null
#  location     :string           not null
#  price        :decimal(10, 3)   not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
  validates :product_name, :ingredients, :bag_size, :grind, :description, 
  :location, :price, presence: true

  # association to grab product image
  has_one_attached :photo

  # association to grad additional product images
  # has_many_attached :supplemental_photos

  # association to grab roast diagram image
  has_one_attached :roast_level_photo

  # helper association to link to product_categories joins table
  has_many :product_categories,
    foreign_key: :product_id,
    class_name: 'ProductCategory'

  # association to get all associated categories
  has_many :categories,
    through: :product_categories,
    source: :category

  has_many :reviews,
    foreign_key: :product_id,
    class_name: 'Review'

  has_many :review_likes,
    through: :reviews,
    source: :likes

  # query db for products that have associated categories that match parameter.
  def self.match_category(category)
    Product
      .joins(:categories)
      .where("name LIKE ?", "%#{category}%")
  end

  # query db for products that have similar names that match parameter.
  def self.match_search(query)
    Product.joins(:categories)
      .where("products.product_name LIKE ? 
            OR categories.name LIKE ? 
            OR products.ingredients LIKE ?", 
            "%#{query.upcase}%", "%#{query.downcase}%", "%#{query.upcase}%")
      .limit(15)
  end
end
