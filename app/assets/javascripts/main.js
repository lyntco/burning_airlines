var app = app || {};

$(document).ready(function() {
  app.templates = {
    // Get templates when they are instantiated
    flightView: $('#flight-template').html(),
    airplanesView: $('#airplanes-template').html()
  }

  app.router = new app.Router();
  app.airplanes = new app.Airplanes();
  app.reservations = new app.Reservations();
  app.flights = new app.Flights();
  Backbone.history.start();
})