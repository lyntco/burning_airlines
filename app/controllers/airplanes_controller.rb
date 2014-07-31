class AirplanesController < ApplicationController
  def index
  end

  def new

  end

  def create
    airplane = Airplane.create(:name => params[:name],
      :rows => params[:rows],
      :cols => params[:cols]
      )
    render :json => airplane
  end

  def edit
    airplane = Airplane.find( params[:id] )
    airplane.update(:name => params[:name],
      :rows => params[:rows],
      :cols => params[:cols]
      )
    render :json => airplane
  end

  def destroy
    airplane = Airplane.find( params[:id] )
    airplane.destroy
    render :text => "Burn baby burn"
  end
end
