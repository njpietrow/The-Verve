# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  review_id  :integer          not null
#  dislike    :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  validates :dislike, inclusion: { in: [ true, false ] }
  validates :user_id, presence: true, uniqueness: { scope: :review_id, message: "Account has already voted on this review" }

  belongs_to :liker,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :review,
    foreign_key: :review_id,
    class_name: 'Review'
end
