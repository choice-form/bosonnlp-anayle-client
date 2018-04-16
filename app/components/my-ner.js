import Component from '@ember/component';

export default Component.extend({
  selected: 2,
  list: [ // eslint-disable-line
    { index: 0, name: '更多' },
    { index: 1, name: '较多' },
    { index: 2, name: '平衡' },
    { index: 3, name: '准确' },
    { index: 4, name: '更准确' },
  ],
  actions: {
    selectNer(value) {
      this.set('selected', value)
      this.get('selectNer')(value + 1)
    }
  }
});
