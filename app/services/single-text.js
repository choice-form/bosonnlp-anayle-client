import Service from '@ember/service';
import { computed } from '@ember/object'

import { baseUrl, post } from '../utils'

export default Service.extend({

  text: '',
  tag: null,
  ner: null,
  keywords: null,
  keywordsForSuggest: computed('keywords', function () {
    if (!Array.isArray(this.keywords)) {
      return null
    }
    if (!Array.isArray(this.keywords[0])) {
      return null
    }
    console.log(this.keywords[0][1]);
    return this.keywords[0][1]
  }),
  depparser: null,
  classify: null,
  sentiment: null,
  suggest: null,
  summary: null,
  async getTag() {
    const url = `${baseUrl}/tag`
    const body = {
      text: this.text
    }
    const data = await post(url, body)
    console.group('分词-tag')
    console.log(data)
    console.groupEnd()
    this.set('tag', data)
  },
  async getNer(sensitivity = 3) {
    const url = `${baseUrl}/ner/?sensitivity=${sensitivity}`;
    const body = {
      text: this.text
    }
    const data = await post(url, body)
    console.group('命名实体识别-ner')
    console.log(data)
    console.groupEnd()
    this.set('ner', data)
  },
  async getKeywords() {
    const url = `${baseUrl}/keywords`
    const body = {
      text: this.text
    }
    const data = await post(url, body)
    console.group('关键字-keywords')
    console.log(data)
    console.groupEnd()
    this.set('keywords', data)
  },
  async getSentiment(type = 'general') {
    const url = `${baseUrl}/sentiment/${type}`
    const body = {
      text: this.text
    }
    const data = await post(url, body)
    console.group('情感分析-sentiment')
    console.log(data)
    console.groupEnd()
    this.set('sentiment', data)
  },
  async getClassify() {
    const url = `${baseUrl}/classify`
    const body = {
      text: this.text
    }
    const data = await post(url, body)
    console.group('新闻分类-classify')
    console.log(data)
    console.groupEnd()
    this.set('classify', data)
  },
  async getSummary(percentage = 0.3) {
    const url = `${baseUrl}/summary?percentage=${percentage}`
    const body = {
      text: this.text
    }
    const data = await post(url, body)
    console.group('新闻摘要-summary')
    console.log(data)
    console.groupEnd()
    this.set('summary', data)
  },
  async getSuggest() {
    const url = `${baseUrl}/suggest`
    const body = {
      text: this.keywordsForSuggest
    }
    const data = await post(url, body)
    console.group('语义联想-suggest')
    console.log(data)
    console.groupEnd()
    this.set('suggest', data)
  }
});
