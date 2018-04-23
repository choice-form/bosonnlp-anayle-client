import Component from '@ember/component';
import { computed } from '@ember/object'

export default Component.extend({
  selected: 0,
  list: [ // eslint-disable-line
    { index: 0, name: '最分散', value: { alpha: 0.8, beta: 0.45 } },
    { index: 1, name: '较分散', value: { alpha: 0.6, beta: 0.45 } },
    { index: 2, name: '平衡', value: { alpha: 0.4, beta: 0.45 } },
    { index: 3, name: '较集中', value: { alpha: 0.2, beta: 0.45 } },
    { index: 4, name: '最集中', value: { alpha: 0, beta: 0.45 } },
  ],
  len: computed('data', function () {
    if(Array.isArray(this.get('data'))){
      return this.get('data').length
    }
    return null
  }),
  resultList: computed('data', function () {
    if (!Array.isArray(this.get('data'))) {
      return null
    }
    const list = this.get('data').slice()
    const lineText = this.get('lineText')
    const arr = list.map(item => {
      const obj = {
        num: item.num,
        list: []
      };
      item.list.forEach(idx => {
        obj.list.push(lineText[idx])
      })
      return obj
    })
    return arr
  }),
  actions: {
    change(index) {
      this.set('selected', index)
      console.log(this.list[index].value)
      this.get('sizeChange')(this.list[index].value)
    }
  }
});
