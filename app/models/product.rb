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
  has_one_attached :photo

  def self.match_category(category)
    Product.where("location LIKE ?", "%#{category}%")
  end
end
