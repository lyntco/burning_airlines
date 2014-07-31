var app = app || {};

// single row of flight details
app.FlightView = Backbone.View.extend({
  tagName: 'div',
  initialize: function() {
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
  },
  render: function() {
    var flightHTML = Handlebars.compile( app.templates.flightView );
    var copy = flightHTML( this.model.toJSON() );
    this.$el.append( copy );
    return this.el;
  }
});