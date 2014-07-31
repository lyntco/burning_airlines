var app = app || {};

app.SeatView = Backbone.View.extend({
  tagName: 'div',
  className: 'seat',
  events: {
    'click': 'saveSeat'
  },
  initialize: function() {
  },
  render: function() {
    this.$el.html( app.templates.seatView )
    return this.el;
  },
  saveSeat: function() {
    console.log(this)
  }
});