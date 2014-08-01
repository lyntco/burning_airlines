var app = app || {};

// This view is for the single seats on an airplane show page
app.ReserveSeatingView = Backbone.View.extend({
  el: '#seating',
  initialize: function() {
    this.render();
  },
  render: function() {
    var seatingBox = this
    console.log(this.flight)
    this.$el.html( app.templates.seatingView );
    _( seatingBox.model.get('rows') ).times(function(n){
      var rowLetters = ['A','B','C','D','E','F','G','H']
      var newRow = $('<div class="seatRow"/>')
      newRow.text( rowLetters[n] )

      _( seatingBox.model.get('cols') ).times(function(n){
        newRow.append( new app.ReserveSeatView({flight: seatingBox.flight}).render() )
      });
      seatingBox.$el.append( newRow )
    });

  }
});