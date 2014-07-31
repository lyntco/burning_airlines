class FlightsController < ApplicationController
  def index
  end

  def create
    flight = Flight.create(:flight_number => params[:flight_number],
      :origin => params[:origin],
      :destination => params[:destination],
      :date => params[:date],
      :airplane_id => params[:airplane_id]
      )
    render :json => flight
  end

  def edit
    flight = Flight.find(params[:id])
    flight.update(:flight_number => params[:flight_number],
      :origin => params[:origin],
      :destination => params[:destination],
      :date => params[:date],
      :airplane_id => params[:airplane_id]
      )
    render :json => flight
  end

  def destroy
    flight = Flight.find(params[:id])
    flight.destroy
    render :text => "BUUUUUURNING"
  end
end
