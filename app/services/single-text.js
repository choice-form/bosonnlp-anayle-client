import Service from '@ember/service';
import { computed } from '@ember/object'

const baseUrl = 'http://192.168.50.127:3000'

const post = async (url, text) => {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      text
    })
  })
  const json = await res.json()
  if (json.status) {
    console.log(json) //eslint-disable-line
    return null
  } else {
    return json
  }
}

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
    const data = await post(url, this.text)
    console.group('分词-tag')
    console.log(data)
    console.groupEnd()
    this.set('tag', data)
  },
  async getNer(sensitivity = 3) {
    const url = `${baseUrl}/ner/?sensitivity=${sensitivity}`;
    const data = await post(url, this.text)
    console.group('命名实体识别-ner')
    console.log(data)
    console.groupEnd()
    this.set('ner', data)
  },
  async getKeywords() {
    const url = `${baseUrl}/keywords`
    const data = await post(url, this.text)
    console.group('关键字-keywords')
    console.log(data)
    console.groupEnd()
    this.set('keywords', data)
  },
  async getSentiment(type = 'general') {
    const url = `${baseUrl}/sentiment/${type}`
    const data = await post(url, this.text)
    console.group('情感分析-sentiment')
    console.log(data)
    console.groupEnd()
    this.set('sentiment', data)
  },
  async getClassify() {
    const url = `${baseUrl}/classify`
    const data = await post(url, this.text)
    console.group('新闻分类-classify')
    console.log(data)
    console.groupEnd()
    this.set('classify', data)
  },
  async getSummary(percentage = 0.3) {
    const url = `${baseUrl}/summary?percentage=${percentage}`
    const data = await post(url, this.text)
    console.group('新闻摘要-summary')
    console.log(data)
    console.groupEnd()
    this.set('summary', data)
  },
  async getSuggest() {
    const url = `${baseUrl}/suggest`
    const data = await post(url, this.keywordsForSuggest)
    console.group('语义联想-suggest')
    console.log(data)
    console.groupEnd()
    this.set('suggest', data)
  }
});
