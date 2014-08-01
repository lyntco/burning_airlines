var app = app || {};

// This view is the clickable reservable seat in the flight view
app.MySeatView = Backbone.View.extend({
  tagName: 'div',
  // id: this.seatID,
  className: 'seat booked',
  events: {
    'click': 'removeSeat'
  },
  initialize: function(options) {
    this.flight = options.flight;
    this.col = options.col;
    this.row = options.row;
  },
  render: function() {
    this.$el.html( app.templates.seatView )
    this.$el.attr('data-col', this.col);
    this.$el.attr('data-row', this.row);
    return this.el;
  },
  removeSeat: function(event) {
    var rowNo = parseInt( $(event.target).attr('data-row') )
    var colNo = parseInt( $(event.target).attr('data-col') )
    $(event.target).toggleClass('reserve')
    $(event.target).toggleClass('booked')
    // var book = new app.Reservation({flight_id: this.flight.get('id'), row: rowNo, col: colNo})
    // book.save()
    // app.reservations.add(book)
    console.log(book)
  }
});