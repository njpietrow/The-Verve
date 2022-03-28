json.extract! review, :id, :title, :body, :stars, :user_id, :product_id

last_name = ""
unless (review.reviewer.last_name.empty?)
  last_name = review.reviewer.last_name[0] + "."
end

json.reviewer review.reviewer.first_name + " " + last_name