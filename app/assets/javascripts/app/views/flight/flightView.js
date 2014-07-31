var app = app || {};

app.ViewFlight = Backbone.View.extend({
  el: '#main',

  initialize: function() {

  },

  render: function() {
    this.$el.html(app.templates.flightView);
  }
})