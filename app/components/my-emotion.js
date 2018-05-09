import Component from '@ember/component';
import { computed } from '@ember/object'

export default Component.extend({
  selected: 0,
  list: [ // eslint-disable-line
    { index: 0, name: '通用', value: 'general' },
    { index: 1, name: '汽车', value: 'auto' },
    { index: 2, name: '厨具', value: 'kitchen' },
    { index: 3, name: '餐饮', value: 'food' },
    { index: 4, name: '新闻', value: 'news' },
    { index: 5, name: '微博', value: 'weibo' },
  ],
  emotionSelected: 0,
  emotionList: [ // eslint-disable-line
    { index: 0, name: '最负面' },
    { index: 1, name: '最正面' }
  ],
  frontList: computed('data', function () {
    if (Array.isArray(this.get('data'))) {
      const list = this.get('data').sort((a, b) => {
        return b.front - a.front
      })
      return list.slice(0, 10)
    }
    return null
  }),
  reverseList: computed('data', function () {
    if (Array.isArray(this.get('data'))) {
      const list = this.get('data').sort((a, b) => {
        return b.reverse - a.reverse
      })
      return list.slice(0, 10)
    }
    return null
  }),
  actions: {
    selectedChange(index) {
      this.set('emotionSelected', index)
      console.log(index);
    },
    emotionChange(index) {
      this.set('selected', index)
      console.log(this.list[index].value)
      this.get('emotionChange')(this.list[index].value)
    }
  }
});
