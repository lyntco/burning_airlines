var app = app || {};

app.AirplaneView = Backbone.View.extend({
  el: '#main',
  inititialize: function() {
    this.render();
  },
  render: function() {
    var airplaneHTML = Handlebars.compile( app.templates.airplaneView );
    var copy = airplaneHTML( this.model.toJSON() );
    this.$el.html( copy );
    return this.el
  }
});