var app = app || {};

app.AirplanesView = Backbone.View.extend({
  el: '#main',
    // tagName: 'li',
  events: {
    'click': 'view'
  },
  inititialize: function() {

  },
  render: function(){
    // var listHTML = Handlebars.compile( app.templates.airplanesView );
    // var copy = listHTML( this.model.toJSON() );
    // this.$el.html( copy );
    // return this.el;
  },
  view: function() {
    app.router.navigate('airplanes/' + this.model.get('id'), true );
  }
});