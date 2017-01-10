import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    toggleItemDone (item) {
        console.log("Inside lists route, and this is item ", item);
        item.toggleProperty('done');
        console.log("Inside 'list' route after toggle, and item is", item);
      item.save();
    },
    deleteItem (item) {
      item.destroyRecord();
    },
  },
});
