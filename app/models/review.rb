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
  validates :title, presence: {message: "Title can't be blank"}
  validates :body, presence: {message: "Body can't be blank"}
  validates :stars, presence: {message: "Rating can't be blank"}
  validates :product_id, presence: true
  validates :user_id, presence: true, uniqueness: { scope: :product_id, message: "Account has already left a review for this product" }

  belongs_to :reviewer,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :product,
    foreign_key: :product_id,
    class_name: 'Product'

  has_many :likes,
    foreign_key: :review_id,
    class_name: 'Like'

  def self.num_likes(review_id)
    (self
      .joins(:likes)
      .where("review_id = ?", review_id.to_i)
      .where("dislike = FALSE")
    ).length
  end

  def self.num_dislikes(review_id)
    (self
      .joins(:likes)
      .where("review_id = ?", review_id.to_i)
      .where("dislike = TRUE")
    ).length
  end
end
