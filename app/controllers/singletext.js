import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

import handleTag from '../utils/handle/handleTag'
import handleNer from '../utils/handle/handleNer'
import handleClassify from '../utils/handle/handleClassify'

export default Controller.extend({
  selected: 0,
  list: [ // eslint-disable-line
    { index: 0, name: '词性分析', value: 'my-tag', icon: 'fa fa-paper-plane' },
    { index: 1, name: '实体识别', value: 'my-ner', icon: 'fa fa-tag' },
    { index: 2, name: '依存文法', value: 'my-depparser', icon: 'fa fa-cubes' },
    { index: 3, name: '情感分析', value: 'my-sentiment', icon: 'fa fa-heart-o' },
    { index: 4, name: '新闻摘要', value: 'my-summary', icon: 'fa fa-flag-o' },
    { index: 5, name: '新闻分类', value: 'my-classify', icon: 'fa fa-sitemap' },
    { index: 6, name: '关键词提取', value: 'my-keywords', icon: 'fa fa-key' },
    { index: 7, name: '词义联想', value: 'my-suggest', icon: 'fa fa-commenting-o' }
  ],
  singleText: inject('single-text'),
  tag: computed('singleText.tag', function () {
    const data = handleTag(this.get('singleText').get('tag'))
    // console.log(data)
    return data
  }),
  keywords: computed('singleText.keywords', function () {
    const data = this.get('singleText').get('keywords')
    return data
  }),
  ner: computed('singleText.ner', function () {
    const data = handleNer(this.get('singleText').ner)
    return data
  }),
  // getSentiment
  sentiment: computed('singleText.sentiment', function () {
    const data = this.get('singleText').sentiment
    // console.log(data);
    return data
  }),
  classify: computed('singleText.classify', function () {
    const data = handleClassify(this.get('singleText').classify)
    return data
  }),
  suggest: computed('singleText.suggest', function () {
    const data = this.get('singleText').suggest
    return data
  }),
  summary: computed('singleText.summary', function () {
    const data = this.get('singleText').summary
    return data
  }),
  keywordsForSuggest: computed('singleText.keywordsForSuggest', function () {
    return this.get('singleText').keywordsForSuggest
  }),
  actions: {
    selectedChange(index) {
      console.log(index)
      this.set('selected', index)
    },
    submit(text) {
      this.get('singleText').set('text', text)
      this.get('singleText').getTag()
      this.get('singleText').getNer()
      this.get('singleText').getKeywords().then(() => {
        this.get('singleText').getSuggest()
      })
      this.get('singleText').getSentiment()
      this.get('singleText').getClassify()
      this.get('singleText').getSummary()
    },
    selectNer(value) {
      this.get('singleText').getNer(value)
    },
    selectSummary(value) {
      this.get('singleText').getSummary(value)
    },
    selectSentiment(value) {
      this.get('singleText').getSentiment(value)
    }
  }
});
