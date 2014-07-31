var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
  '': 'index',
  '/flights': 'getFlights',
  '/flights/:id': 'getFlight',
  '/airplanes': 'getAirplanes',
  '/airplane': 'getAirplane',
  '/reservations': 'getReservations',
  '/reservation': 'getReservation'
  },
  index: function() {
    console.log('you got index');
  },

  getFlights: function() {

  },

  getFlight: function() {

  },

  getAirplanes: function() {

  },

  getAirplane: function() {

  },

  getReservations: function() {

  },

  getReservation: function() {

  }
})