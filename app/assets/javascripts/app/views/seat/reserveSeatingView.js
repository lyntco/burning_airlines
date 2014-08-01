var app = app || {};

// This view is for the single seats on an airplane show page
app.ReserveSeatingView = Backbone.View.extend({
  el: '#seating',
  initialize: function(options) {
    // console.log(options)
    this.flight = options.flight;
    // this.render();
    console.log('right view');
    var mainView = this
    var flight = this.flight
    flight.fetch().done(function(response){
        mainView.reservedSeats = response.seat;
        console.log(mainView.reservedSeats)
        mainView.render();
    });
    setInterval(function() {
      flight.fetch().done(function(response){
        mainView.reservedSeats = response.seat;
        console.log(mainView.reservedSeats)
        mainView.render();
      });
    },10000);
  },
  render: function() {
    var seatingBox = this;
    var mainView = this;
    var reservedSeats = {};
    _.each( mainView.reservedSeats, function(seat) {
      var row = seat.row;
      var col = seat.col;
      reservedSeats[row] = col;
    });
    // console.log(reservedSeats.indexOf([1,2]))
    this.$el.html( app.templates.seatingView );
    _( seatingBox.model.get('rows') ).times(function(n){
      var rowLetters = ['A','B','C','D','E','F','G','H'];
      var newRow = $('<div class="seatRow"/>');
      newRow.text( rowLetters[n] )
      _( seatingBox.model.get('cols') ).times(function(m){
        // _.each(reservedSeats, function(seat))
        if ( reservedSeats[n+1] == m+1) {
          console.log('got it');
          newRow.append( new app.SeatView( {flight: seatingBox.flight, col: m+1, row:n+1}).render() );
        } else {
          newRow.append( new app.ReserveSeatView( {flight: seatingBox.flight, col: m+1, row:n+1}).render() )
        }
      });
      seatingBox.$el.append( newRow )
    });
  },

  checkPresence: function(array, check) {
    _.each(array, function(ele) {
      if (array[0] == check[0] && array[1] && array[1]) return true;
    })
    return false;
  }
});