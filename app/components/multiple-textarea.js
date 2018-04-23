import Component from '@ember/component';
import { computed } from '@ember/object'

export default Component.extend({
  selected: 0,
  list: [ // eslint-disable-line
    { index: 0, name: '微博新闻' },
    { index: 1, name: 'mh370微博' },
    { index: 2, name: '汽车口碑' },
    { index: 3, name: '电商口碑' },
  ],
  text: computed('data', function () {
    return this.get('data')
  }),
  actions: {
    select(value) {
      this.set('selected', value)
      this.get('changeText')(value)
    },
    submit(){
      // debugger
      this.get('submit')(this.text)
    }
  }
});
