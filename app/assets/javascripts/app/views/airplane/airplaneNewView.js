var app = app || {};

app.AirplaneNewView = Backbone.View.extend({
  el: '#new-airplane',
  events: {
    'submit': 'addNewAirplane',
    'click': 'test'
  },
  initialize: function() {
    this.render()
  },
  render: function() {
    console.log('render new airplane')
  },
  addNewAirplane: function(event){
    event.preventDefault();
    alert(this)
  },
  test: function(event) {
    event.preventDefault();
    console.log(event);
  }
});