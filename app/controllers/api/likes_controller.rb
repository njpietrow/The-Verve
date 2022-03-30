class Api::LikesController < ApplicationController
  def create
    like = Like.new(like_params)
    existing_like = Like.find_by(
      user_id: params[:like][:user_id],
      review_id: params[:like][:review_id]
    )
    

    # if they are different, update the existing like value
    # otherwise they are both likes - do nothing and return error upon save
    if !existing_like.nil? && (like.dislike != existing_like.dislike)
      existing_like.dislike = !existing_like.dislike  
      like = existing_like
    end
      
    if like.save
      # find the associated review and send that back 
      # to frontend so state.entities.reviews will update
      @review = like.review
      render 'api/reviews/show'
    else
      render json: like.errors, status: 401
    end
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :review_id, :dislike)
  end
end
