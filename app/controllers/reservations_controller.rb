class ReservationsController < ApplicationController
  def index
    # @reservations = reservations //where flight id_ = pram
  end

  def create
    reservation = Reservation.create(:user_id => @current_user.id, :flight_id => params[:flight_id])
    render :json => reservation
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy
    render :text => "Boom."
  end
end
