class Api::SessionsController < ApplicationController
  before_action :require_logged_out, only: :create
  before_action :require_logged_in, only: :destroy

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password],
    )
    if @user 
      login!(@user)
      render "api/users/show"
      # redirect_to user_url(@user)
    else
      render json: ["Username or password incorrect"], status: 401
      # flash[:errors] = ["Username or password incorrect"]
      # redirect_to user_url(@user)
    end
  end

  def destroy
    @user = current_user
    if (!@user)
      render json: ["No user currently logged in"], status: 404
    else
      logout!
      render "api/users/show"
    end
  end
end
