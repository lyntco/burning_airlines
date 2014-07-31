var app = app || {};

app.AirplaneNewView = Backbone.View.extend({
  el: '',
  initialize: function() {
    this.render()
  },
  render: function() {
    console.log('render new airplane')
  }
});