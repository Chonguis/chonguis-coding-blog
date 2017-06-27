import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost(id){
      this.store.findRecord('post', id).then(function(post){
        post.destroyRecord();
      })
    }
  }
});
