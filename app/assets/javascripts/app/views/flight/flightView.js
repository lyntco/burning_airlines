var app = app || {};

app.flightView = Backbone.View.extend({
  initialize: function() {

  },

  render: function() {
    var view_html = Handlebars.compile(app.templates.flightView);
    console.log(view_html);
  }
})