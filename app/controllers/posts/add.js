import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPost(){
      var user = this.get('user');
      var today = this.get('getToday');
      var tomorrow = this.get('getTomorrow');
      var date = new Date();

      var newPost = this.store.createRecord('post', {
        today: today,
        tomorrow: tomorrow,
        user: user,
        date: date
      });

      newPost.save();

      this.setProperties({
        today: '',
        tomorrow: '',
        user: ''
      })

    }
  }
});
