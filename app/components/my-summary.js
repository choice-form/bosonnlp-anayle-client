import Component from '@ember/component';

export default Component.extend({
  selected: 0,
  list: [ // eslint-disable-line
    { index: 0, name: '50%', value: 0.5 },
    { index: 1, name: '40%', value: 0.4 },
    { index: 2, name: '30%', value: 0.3 },
    { index: 3, name: '20%', value: 0.2 },
  ],
  actions: {
    click(index) {
      console.log(index)
      this.set('selected', index)
      this.get('selectSummary')(this.list[index].value)
    }
  }
});
