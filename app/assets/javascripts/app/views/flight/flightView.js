var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',

  initialize: function() {
    // binding listener for add to collection
    _.bindAll(this, 'render');
    this.collection.bind('add', this.render);
  },

  render: function() {

    var template = Handlebars.compile(app.templates.flightView);
    console.log(this.collection)
    var view_html = template({models: this.collection.models})

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
  }
})