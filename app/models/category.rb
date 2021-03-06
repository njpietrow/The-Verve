# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
  validates :name, presence: true

  # association to product_categories joins table
  has_many :product_categories,
    foreign_key: :category_id,
    class_name: 'ProductCategory'
end
