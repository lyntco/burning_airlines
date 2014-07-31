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
    this.$el.html( app.templates.airplaneNewView )
    this.$el.append( app.templates.seatingView )
    this.$el.append( app.templates.airplanesView )
    this.collection.each(function(a){
      var view = new app.AirplaneView({model: a});
      $('#airplanes').append( view.render() );
    });
    return this;
  },
  view: function() {
    app.router.navigate('airplanes/' + this.model.get('id'), true );
  }
});