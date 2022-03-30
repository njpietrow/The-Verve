json.extract! review, :id, :title, :body, :stars, :user_id, :product_id
json.date Time.at(review.created_at.to_i).strftime("%B %e, %Y")

json.like_count review.num_likes

json.dislike_count review.num_dislikes

last_name = ""
unless (review.reviewer.last_name.empty?)
  last_name = review.reviewer.last_name[0] + "."
end

json.reviewer review.reviewer.first_name + " " + last_name