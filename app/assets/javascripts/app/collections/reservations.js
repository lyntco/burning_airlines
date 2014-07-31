var app = app || {};

app.Reservations = new Backbone.Collection.extend({
  url: '/reservations',
  initialize: function(){
  }
});