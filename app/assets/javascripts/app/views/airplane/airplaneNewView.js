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
    console.log('render new airplane');
    // return this;
  },
  addNewAirplane: function(event){
    // event.preventDefault();
    var newPlane = new app.Airplane( {name: $('#airplane-name').val(), rows: $('#airplane-rows').val(), cols: $('#airplane-cols').val()} )
    newPlane.save();
    app.airplanes.add(newPlane);
    debugger;
    // console.log(this)
    // alert(this)
  },
});