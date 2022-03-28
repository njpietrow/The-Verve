# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  stars      :integer          not null
#  user_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
  validates :title, :body, :stars, :user_id, :product_id, presence: true

  belongs_to :reviewer,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :product,
    foreign_key: :product_id,
    class_name: 'Product'
end
