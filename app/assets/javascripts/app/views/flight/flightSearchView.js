var app = app || {};

// search and result underneath
app.FlightSearchView = Backbone.View.extend({
  el: '#main',

  initialize: function() {
    // binding listener for add to collection
    _.bindAll(this, 'render');
    this.collection.bind('add', this.render);
  },

  render: function() {

    var template = Handlebars.compile(app.templates.flightSearchView);
    var view_html = template({models: this.collection.models})
    this.$el.html(view_html);
    // var view = this.$el.html(app.templates.flightView);
    // this.collection.models.each(function() {});
    // this.models.each(function(model) {
    //   console.log(model);
    //   view.find('select').value();
    // })
    // loop for this.models
    //   $(view).('#origin').append($('<select>').value(models.id).name
    // end
    return this;
  },
  events: {
    'submit': 'submitFlight'
  },

  submitFlight: function(event) {
    event.preventDefault();
    // select from current collection - dirty hack you should fetch at this point
    var mainView = this
    mainView.$el.find('#flight-results').html('');
    var selectedFlights = this.collection.where({origin: $('#flight-start-dropdown option:selected').val(), destination: $('#flight-end-dropdown option:selected').val()});
    _.each(selectedFlights, function(flight) {
      // debugger;
      var view = new app.FlightView({model: flight});
      mainView.$el.find('#flight-results').html(view.render());
    });
  }
})