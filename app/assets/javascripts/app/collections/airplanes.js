var app = app || {};

app.Airplanes = new Backbone.Collection.extend({
  url: '/airplanes',
  initialize: function(){
  }
});