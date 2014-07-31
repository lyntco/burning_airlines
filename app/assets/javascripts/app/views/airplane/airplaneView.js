var app = app || {};

app.AirplaneView = Backbone.View.extend({
  el: '#airplanes',
  events: {
    'click': 'view'
  },
  initialize: function() {
    _.bindAll(this, 'render');
    this.model.bind('add', this.render);
  },
  render: function() {
    var airplaneHTML = Handlebars.compile( app.templates.airplaneView );
    var copy = airplaneHTML( this.model.toJSON() );
    this.$el.append( copy );
    return this;
  },
  view: function() {
    // app.router.navigate('airplanes/' + this.model.get('id'), true );
  }
});