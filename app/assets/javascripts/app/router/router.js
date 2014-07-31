var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
  '': 'index',
  'flights': 'getFlights',
  'flights/:id': 'getFlight',
  'airplanes': 'getAirplanes',
  'airplane': 'getAirplane',
  'reservations': 'getReservations',
  'reservation': 'getReservation'
  },
  index: function() {
    console.log('you got index');
  },

  getFlights: function() {
    var view = new app.View.Flight();
  },

  getFlight: function(id) {
    console.log('you got flight' + id);
  },

  getAirplanes: function() {
    console.log('you got airplanes');
  },

  getAirplane: function(id) {
    console.log('you got airplane' + id);
  },

  getReservations: function() {
    console.log('you got reservations');
  },

  getReservation: function(id) {
    console.log('you got reservation' + id);
  }
})