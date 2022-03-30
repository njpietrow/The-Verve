class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: :create

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors, status: 401
    end
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :stars, :user_id, :product_id)
  end
end
