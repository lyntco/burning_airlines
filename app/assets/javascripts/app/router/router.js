var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
  '': 'index',
  'flights': 'getFlights',
  'flights/:id': 'getFlight',
  'airplanes': 'getAirplanes',
  'airplanes/:id': 'getAirplane',
  'reservations': 'getReservations',
  'reservation': 'getReservation',
  'users': 'getUsers',
  'users/:id': 'getUser'
  },
  initialize: function() {
    console.log('routing')
  },
  index: function() {
    console.log('you got index');
  },

  getFlights: function() {
    var view = new app.FlightSearchView({collection: app.flights});
    view.render();
  },

  getFlight: function(id) {
    app.flight = app.flights.get(id);
    var view = new app.FlightShowView({model: app.flight});
    view.render();
  },

  getAirplanes: function() {
    var view = new app.AirplanesView({collection: app.airplanes});
    view.render();
  },

  getAirplane: function(id) {
    app.airplane = app.airplanes.get(id);
    var view = new app.AirplaneShowView({model: app.airplane});
    view.render();
  },

  getReservations: function() {
    var view = new app.ReservationsView({collection: app.reservations});
    view.render();
  },

  getReservation: function(id) {
    console.log('you got reservation' + id);
  },

  getUsers: function() {

  },

  getUser: function(id) {

  }
})