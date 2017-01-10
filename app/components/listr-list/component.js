import Ember from 'ember';

export default Ember.Component.extend({
  newItem: {
    content: null,
    done: false,
  },
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item){
      console.log("You're inside toggleDone in listr-list Component, and item is ", item);
      this.sendAction('toggleItemDone', item);
    },
    deleteItem (item) {
      this.sendAction('deleteItem', item);
    },
    createItem () {
      console.log("This is newItem", this.get('newItem'));
      let data = this.get('newItem');
      data.list = this.get('list');
      this.sendAction('createItem', data);
    },
  },
});
