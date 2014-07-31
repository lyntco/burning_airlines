var app = app || {};

app.viewFlight = Backbone.View.extend({
  el: '#main',

  initialize: function() {

  },

  render: function() {
    this.$el.html(app.templates.flightView);
  }
})