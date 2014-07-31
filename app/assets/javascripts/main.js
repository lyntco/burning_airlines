var app = app || {};

$(document).ready(function() {
  app.templates = {
    // Get templates when they are instantiated
    appView: $('#app-template').html(),
    airplaneShowView: $('#airplane-show-template').html(),
    airplaneView: $('#airplane-row-template').html(),
    airplaneNewView: $('#new-airplane-template').html(),
    airplanesView: $('#airplanes-template').html(),
    flightSearchView: $('#flight-search-template').html(),
    flightShowView: $('#flight-show-template').html(),
    flightView: $('#flight-row-template').html(),
    // flightNewView: $('#new-flight-template').html(),
    flightsView: $('#flights-template').html(),
    reservationView: $('#reservation-template'),
    reservationsView: $('#reservations-template'),
    seatView: $('#seat-template'),
    seatingView: $('#seating-template').html()
  }
  app.airplanes = new app.Airplanes();
  app.reservations = new app.Reservations();
  app.flights = new app.Flights();

  var counter = 0;
  app.flights.fetch().done(function() {
    counter++;
    console.log(counter);
    if (counter == 3) app.router = new app.Router();
  });
  app.reservations.fetch().done(function() {
    counter++;
    console.log(counter);
    if (counter == 3) app.router = new app.Router();
  });
  app.airplanes.fetch().done(function() {
    counter++;
    console.log(counter);
    if (counter == 3) app.router = new app.Router();
  });

  Backbone.history.start();
});