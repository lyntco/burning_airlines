var app = app || {};

app.AirplanesView = Backbone.View.extend({
  el: '#main',
  events: {
    'click': 'view'
  },
  initialize: function() {
    _.bindAll(this, 'render');
    this.collection.bind('add', this.render);
  },
  render: function(){
    var createAirplaneView = new app.AirplaneNewView();
    createAirplaneView.render() // puts form in
    this.$el.append( airplaneView.render() );
    this.$el.append( app.templates.airplaneView );
    return this;
  },
  view: function() {
    // app.router.navigate('airplanes/' + this.model.get('id'), true );
  }
});