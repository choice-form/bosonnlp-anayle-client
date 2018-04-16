import Component from '@ember/component';

export default Component.extend({
  selected: 0,
  list: [ // eslint-disable-line
    { index: 0, name: '通用', value: 'general' },
    { index: 1, name: '汽车', value: 'auto' },
    { index: 2, name: '厨具', value: 'kitchen' },
    { index: 3, name: '餐饮', value: 'food' },
    { index: 4, name: '新闻', value: 'news' },
    { index: 5, name: '微博', value: 'weibo' }
  ],
  actions: {
    selectSentiment(value) {
      console.log(value)
      this.set('selected', value)
      this.get('selectSentiment')(this.list[value].value)
    }
  }
});
