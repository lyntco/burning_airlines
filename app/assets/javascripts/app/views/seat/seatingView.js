var app = app || {};

app.SeatingView = Backbone.View.extend({
  el: '#seating',
  initialize: function() {
    this.seatNumbers = this.model.get('rows') * this.model.get('cols');
    this.render();
  },
  render: function() {
    var seatingBox = this
    this.$el.html( app.templates.seatingView );
    _( seatingBox.model.get('rows') ).times(function(n){
      var rowLetters = ['A','B','C','D','E','F','G','H']
      seatingBox.$el.append('<div/>')
      seatingBox.$el.append( rowLetters[n] )
      _( seatingBox.model.get('cols') ).times(function(n){
        seatingBox.$el.append( new app.SeatView().render() )
      });
    });

  }
});