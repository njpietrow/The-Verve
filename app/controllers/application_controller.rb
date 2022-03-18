class ApplicationController < ActionController::Base
  helper_method :current_user, :require_logged_in, :logged_in?
  
  # CRLLL
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    render "static_pages/root" unless logged_in?
  end

  def require_logged_out
    render "static_pages/root" if logged_in?
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
