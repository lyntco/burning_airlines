var app = app || {};

app.viewFlight = Backbone.View.extend({
  el: '#main',

  initialize: function() {
    // binding listener for add to collection
    _.bindAll(this, 'render');
    this.collection.bind('add', this.render);
  },

  render: function() {
    // console.log(this.collection);
    var template = Handlebars.compile(app.templates.flightView);
    console.log(this.collection.toJSON());
    try {
      var copy = template(this.collection.toJSON());
    } catch(err) {
      console.log('err');
    }
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