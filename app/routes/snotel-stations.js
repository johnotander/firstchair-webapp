import Ember from 'ember';

export default Ember.Route.extend({
  model: function(controller) {
    return this.store.findAll('snotel-station');
  },
  renderTemplate: function() {
    this.render();
  }
});
