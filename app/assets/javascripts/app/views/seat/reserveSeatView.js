var app = app || {};

// This view is the clickable reservable seat in the flight view
app.ReserveSeatView = Backbone.View.extend({
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