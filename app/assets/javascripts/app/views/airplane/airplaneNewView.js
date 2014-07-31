var app = app || {};

app.AirplaneNewView = Backbone.View.extend({
  el: '#airplanes',
  events: {
    'click button': 'addNewAirplane'
  },
  initialize: function() {
    // this.render()
  },
  render: function() {
    this.$el.html( app.templates.airplaneNewView );
    console.log('render new airplane')
    // return this;
  },
  addNewAirplane: function(event){
    // event.preventDefault();
    $('#airplane-name').val();
    console.log(this)
    // alert(this)
  },
});