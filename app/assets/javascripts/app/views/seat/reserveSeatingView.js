var app = app || {};

// This view is for the single seats on an airplane show page
app.ReserveSeatingView = Backbone.View.extend({
  el: '#seating',
  initialize: function(options) {
    // console.log(options)
    this.flight = options.flight;
    this.render();
    console.log('right view');
    var mainView = this
    var flight = this.flight
    setInterval(function() {
      flight.fetch().done(function(){
        mainView.render();
      });
    },1000);
  },
  render: function() {
    var seatingBox = this;
    console.log(this)
    this.$el.html( app.templates.seatingView );
    _( seatingBox.model.get('rows') ).times(function(n){
      var rowLetters = ['A','B','C','D','E','F','G','H']
      var newRow = $('<div class="seatRow"/>')
      newRow.text( rowLetters[n] )

      _( seatingBox.model.get('cols') ).times(function(m){
        newRow.append( new app.ReserveSeatView({flight: seatingBox.flight, col: m+1, row:n+1}).render() )
      });

      seatingBox.$el.append( newRow )
    });

  }
});