var app = app || {};

app.FlightShowView = Backbone.View.extend({
  el: '#main',
  initialize: function() {
    this.render();
  },
  render: function() {
    // var html = Handlebars.compile( app.templates.flightShowView );
    // var copy = html( this.model.toJSON() );
    // this.$el.html( copy );
    // // console.log(this)
    // var seating = new app.SeatingView({model: this.model});
  }

});