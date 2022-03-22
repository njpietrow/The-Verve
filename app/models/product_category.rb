# == Schema Information
#
# Table name: product_categories
#
#  id          :bigint           not null, primary key
#  product_id  :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class ProductCategory < ApplicationRecord
  belongs_to :product,
    foreign_key: :product_id,
    class_name: 'Product'

  belongs_to :category,
    foreign_key: :category_id,
    class_name: 'Category'
end
