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