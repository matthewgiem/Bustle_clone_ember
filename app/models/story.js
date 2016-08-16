import DS from 'ember-data';

export default DS.Model.extend({
  picture: DS.attr(),
  type: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  title: DS.attr()
});
