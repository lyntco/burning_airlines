var app = app || {};

app.AirplanesView = Backbone.View.extend({
  el: '#main',
  initialize: function() {
    _.bindAll(this, 'render');
    this.collection.bind('add', this.render);
  },
  render: function(){
    var createAirplaneView = new app.AirplaneNewView();
    this.$el.html( createAirplaneView.render() ); // puts form in
    this.$el.append( app.templates.seatingView )
    this.$el.append( app.templates.airplanesView )
    this.collection.each(function(a){
      var view = new app.AirplaneView({model: a});
      $('#airplanes').append( view.render() );
    });
    return this;
  }
});