class Api::ProductsController < ApplicationController
  def index
    # conditionally return all products unless there is a query params.
    # first see if there is a search param, then filter by category
    if query
      @products = query.empty? ? Product.all.limit(15) : Product.match_search(query)
    elsif category
      @products = Product.match_category(category)
    else
      @products = Product.all
    end
    render :index
  end

  def show
    @product = Product.includes(:reviews).find_by(id: params[:id])
    render :show
  end

  private
  def category
    if params[:filters]
      params[:filters][:category]
    end
  end

  def query
    if params[:filters]
      params[:filters][:query]
    end
  end
end
