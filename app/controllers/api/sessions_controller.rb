class Api::SessionsController < ApplicationController
  before_action :require_logged_out, only: :create
  before_action :require_logged_in, only: :destroy

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password],
    )
    # debugger
    if @user 
      login!(@user)
      render "api/users/show"
    else
      render json: ["Username or password incorrect"], status: 401
    end
  end

  def destroy
    @user = current_user
    if (@user)
      logout!
      render "api/users/show"
    else
      render json: ["No user currently logged in"], status: 404
    end
  end
end