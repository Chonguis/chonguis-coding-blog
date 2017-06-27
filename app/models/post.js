import DS from 'ember-data';

export default DS.Model.extend({
  today: DS.attr('string'),
  tomorrow: DS.attr('string'),
  user: DS.attr('string'),
  date: DS.attr('date')
});
