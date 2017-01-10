import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      // request to API? Send action up because can only talk to API from route
      console.log("You're inside toggleDone in listr-list/item Component!");
      this.sendAction('toggleDone', this.get('item'));
      // return this.toggleProperty('listItemCompleted');
    },
    delete () {
      console.log("Delete this");
      console.log("this is the thing being deleted ", this.get('item'));
      this.sendAction('delete', this.get('item'));
    }
  },
});
