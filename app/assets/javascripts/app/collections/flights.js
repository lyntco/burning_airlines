var app = app || {};

app.Flights = new Backbone.Collection.extend({
  url: '/flights',
  initialize: function(){
  }
});