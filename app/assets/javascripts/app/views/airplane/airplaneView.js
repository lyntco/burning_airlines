var app = app || {};

// Single row airplane
app.AirplaneView = Backbone.View.extend({
  el: '#airplanes',
  initialize: function() {
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
  },
  render: function() {
    var airplaneHTML = Handlebars.compile( app.templates.airplaneView );
    var copy = airplaneHTML( this.model.toJSON() );
    this.$el.append( copy );
    return this.el;
  }
});