class ReservationsController < ApplicationController
  def index
    if @current_user.is_admin?
      @reservations = Reservation.all
    else
      @reservations = Reservation.where(:user_id => @current_user.id)
    end
    render json: @reservations
  end

  def create
    reservation = Reservation.create(:user_id => @current_user.id, :flight_id => params[:flight_id], :row => params[:row], :col => params[:col])
    render :json => reservation
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy
    render :text => "Boom."
  end
end
