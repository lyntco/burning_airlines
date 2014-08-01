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
        mainView.user_id = response.user_id;
        mainView.render();
    });
    setInterval(function() {
      flight.fetch().done(function(response){
        mainView.reservedSeats = response.seat;
        mainView.render();
      });
    },1000);
  },
  render: function() {
    var seatingBox = this;
    var mainView = this;
    var reservedSeats = {};
    var mySeats = {};
    _.each( mainView.reservedSeats, function(seat) {
      var row = seat.row;
      var col = seat.col;
      if (reservedSeats[row]) {
        reservedSeats[row].push(col);
      } else {
        reservedSeats[row] = [col];
      }
    });

    _.each( app.reservations.where({user_id: mainView.user_id}), function(reservation) {
      var row = reservation.get('row');
      var col = reservation.get('col');
      if (mySeats[row]) {
        mySeats[row].push(col);
      } else {
        mySeats[row] = [col];
      }
    });

    this.$el.html( app.templates.seatingView );
    _( seatingBox.model.get('rows') ).times(function(n){
      var rowLetters = ['A','B','C','D','E','F','G','H'];
      var newRow = $('<div class="seatRow"/>');
      newRow.text( rowLetters[n] )
      _( seatingBox.model.get('cols') ).times(function(m){
        // _.each(reservedSeats, function(seat))
        if ( reservedSeats[n+1] && reservedSeats[n+1].indexOf(m+1) > -1) {
          // console.log(mySeats)
          if ( mySeats[n+1] && mySeats[n+1].indexOf(m+1) > -1 ) {
            console.log('my seat')
            newRow.append( new app.MySeatView( {flight: seatingBox.flight, col: m+1, row: n+1}).render() );
          } else {
            newRow.append( new app.SeatView( {flight: seatingBox.flight, col: m+1, row: n+1}).render() );
          }
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