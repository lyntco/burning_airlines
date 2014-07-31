class UsersController < ApplicationController
  # before_action :check_if_logged_in, :except => [:new, :create, :index, :show]
  # before_action :check_if_admin, :only => [:index]

  def index
    @users = User.all
  end

  def create
    @user = User.new user_params
    # raise params.inspect
    @user.username = @user.username.downcase # forces downcase username
    if @user.save
      session[:user_id] = @user.id
      redirect_to( root_path )
    else
      render :new
    end
  end

  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
    if params[:id].to_i != @current_user.id && @current_user.is_admin? != true
      redirect_to( edit_user_path(@current_user) )
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @current_user.authenticate(params[:user][:current_password]) || @current_user.is_admin?
      @user.update user_params
      if @current_user.is_admin?
        redirect_to( users_path )
      else
        redirect_to( user_path(@current_user.username))
      end
    else
      flash[:notice] = "Your current password didn't match. Please try again"
      redirect_to( edit_user_path(@current_user) )
    end
  end

  def make_admin
    user = User.find(params[:id])
    if user.is_admin?
      user.is_admin = false
    else
      user.is_admin = true
    end
    user.save
    redirect_to( users_path )
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to( users_path )
  end

  private
  def user_params
    params.require(:user).permit(:username, :name, :password, :password_confirmation, :email)
  end

end