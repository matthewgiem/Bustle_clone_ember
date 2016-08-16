import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    save1(){
      var params = {
        picture: this.get('picture') ? this.get('picture'): "https://lovelace-media.imgix.net/uploads/273/26304300-42eb-0134-cd12-0aec1efe63a9.jpg?w=373&h=280&fit=crop&crop=faces&auto=format&q=70",
        type: this.get('type') ? this.get('type'): "no type",
        body: this.get('body') ? this.get('body'): "no body",
        author: this.get('author') ? this.get('author'): "no author",
        date: this.get('date') ? this.get('date'): "no date",
        title: this.get('title') ? this.get('title'): "no title"
      };
      this.sendAction('save2', params);
    }
  }
});
