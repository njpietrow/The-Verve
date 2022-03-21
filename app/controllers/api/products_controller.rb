class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.with_attached_photo.find_by(id: params[:id])
    render :show
  end
end
