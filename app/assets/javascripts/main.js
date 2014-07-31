var app = app || {};

$(document).ready(function() {
  app.templates = {
    // Get templates when they are instantiated
    appView: $('#app-template').html(),
    flightView: $('#flight-template').html(),
    airplaneShowView: $('#airplane-show-template').html(),
    airplaneView: $('#airplane-template').html(),
    airplaneNewView: $('#new-airplane-template').html(),
    airplanesView: $('#airplanes-template').html(),
    seatView: $('#seat-template'),
    seatingView: $('#seating-template').html()
  }

  app.router = new app.Router();
  app.airplanes = new app.Airplanes();
  app.reservations = new app.Reservations();
  app.flights = new app.Flights();
  app.flights.fetch();
  Backbone.history.start();
});