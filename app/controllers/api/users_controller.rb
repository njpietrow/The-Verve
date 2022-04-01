class Api::UsersController < ApplicationController
  before_action :require_logged_out

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password],
    )
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end