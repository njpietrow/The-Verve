class Api::ProductsController < ApplicationController
  def index
    # conditionally return all products unless there is a query params.
    @products =  category ? Product.match_category(category) : Product.all
    render :index
  end

  def show
    @product = Product.with_attached_photo.find_by(id: params[:id])
    render :show
  end

  private
  def category
    if params[:filters]
      params[:filters][:category]
    end
  end
end
