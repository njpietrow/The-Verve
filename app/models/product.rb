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
#  roast_level  :integer          not null
#  farm_story   :text             not null
#  location     :string           not null
#  price        :decimal(10, 3)   not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
  validates :product_name, :ingredients, :bag_size, :grind, :description, 
    :roast_level, :farm_story, :location, :price, presence: true

  has_one_attached :photo

  has_many :product_categories,
    foreign_key: :product_id,
    class_name: 'ProductCategory'

  has_many :categories,
    through: :product_categories,
    source: :category

  def self.match_category(category)
    Product
      .joins(:categories)
      .where("name LIKE ?", "%#{category}%")
  end
end
