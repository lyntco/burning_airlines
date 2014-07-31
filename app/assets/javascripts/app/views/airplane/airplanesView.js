var app = app || {};

app.AirplanesView = Backbone.View.extend({
  el: '#main',
    // tagName: 'li',
  events: {
    'click': 'view'
  },
  initialize: function() {
    _.bindAll(this, 'render');
    this.collection.bind('add', this.render);
  },
  render: function(){
    this.$el.html( app.templates.airplanesView )
    // console.log(this.collection)
    this.collection.each(function(a){
      var view = new app.AirplaneView({model: a});
      $('#airplanes').append( view.render() );
    });
    // console.log('rendreing airplanes')
    return this;
  },
  view: function() {
    app.router.navigate('airplanes/' + this.model.get('id'), true );
  }
});