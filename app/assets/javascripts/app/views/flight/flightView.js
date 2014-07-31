var app = app || {};

app.viewFlight = Backbone.View.extend({
  el: '#main',

  initialize: function() {

  },

  render: function() {
    this.$el.html(app.templates.flightView);
    console.log(app.templates.flightView);

    // var view_html = Handlebars.compile(app.templates.flightView);
    // var copy = view_html();

  }
})