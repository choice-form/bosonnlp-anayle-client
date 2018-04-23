import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['menu'],
  // selected: 0,
  // list: [ // eslint-disable-line
  //   { index: 0, name: '词性分析', value: 'my-tag', icon: 'fa fa-paper-plane' },
  //   { index: 1, name: '实体识别', value: 'my-ner', icon: 'fa fa-tag' },
  //   { index: 2, name: '依存文法', value: 'my-depparser', icon: 'fa fa-cubes' },
  //   { index: 3, name: '情感分析', value: 'my-sentiment', icon: 'fa fa-heart-o' },
  //   { index: 4, name: '新闻摘要', value: 'my-summary', icon: 'fa fa-flag-o' },
  //   { index: 5, name: '新闻分类', value: 'my-classify', icon: 'fa fa-sitemap' },
  //   { index: 6, name: '关键词提取', value: 'my-keywords', icon: 'fa fa-key' },
  //   { index: 7, name: '词义联想', value: 'my-suggest', icon: 'fa fa-commenting-o' }
  // ],
  actions: {
    selectedChange(index) {
      this.get('selectedChange')(index)
    }
  }
});
