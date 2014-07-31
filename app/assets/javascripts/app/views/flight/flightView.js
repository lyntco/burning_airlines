var app = app || {};

app.View.Flight = Backbone.View.extend({
  initialize: function() {

  },

  render: function() {
    var view_html = Handlebars.compile(app.templates.flightView);
    console.log(view_html);
  }
})