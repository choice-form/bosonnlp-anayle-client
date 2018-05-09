import Controller from '@ember/controller';
import { computed } from '@ember/object'
import { inject } from '@ember/service'

import handleEmotion from '../utils/handle/handleEmotion'
import handleWc from '../utils/handle/handleWc'

import { multipleText as text } from '../services/demo'

export default Controller.extend({
  selected: 0,
  list: [ // eslint-disable-line
    { index: 0, name: '话题聚集', value: 'my-cluster', icon: 'fa fa-paper-plane' },
    { index: 1, name: '情感分析', value: 'my-emotion', icon: 'fa fa-tag' },
    { index: 2, name: '词频', value: 'my-wc', icon: 'fa fa-cubes' },
    { index: 3, name: '词云', value: 'my-cloud', icon: 'fa fa-heart-o' }
  ],
  multipleText: inject('multiple-text'),
  text: computed('multipleText.text', function () {
    return this.get('multipleText').text
  }),
  lineText: computed('multipleText.lineText', function () {
    return this.get('multipleText').lineText
  }),
  cluster: computed('multipleText.cluster', function () {
    return this.get('multipleText').cluster
  }),
  emotion: computed('multipleText.emotion', function () {
    return handleEmotion(this.get('multipleText').emotion, this.get('lineText'))
  }),
  cloud: computed('multipleText.cloud', function () {
    return this.get('multipleText').cloud
  }),
  wc: computed('multipleText.wc', function () {
    return handleWc(this.get('multipleText').wc)
  }),
  actions: {
    // 菜单选择
    selectedChange(index) {
      this.set('selected', index)
    },
    getData(text) {
      // debugger
      this.get('multipleText').set('text', text)
      // this.set(this.get('multipleText').text, text)
      this.initGet()
    },
    changeText(index) {
      this.get('multipleText').set('text', text[index].text)
    },
    // 话题聚类
    sizeChange(value) {
      this.get('multipleText').set('alpha', value.alpha)
      this.get('multipleText').set('beta', value.beta)
      // TODO: 实际请求需要去掉注释
      this.get('multipleText').getCluster()
    },
    emotionChange(value){
      this.get('multipleText').getEmotion(value)
    }
  },
  init() {
    this._super(...arguments)
    // this.initGet()
  },
  initGet() {
    this.get('multipleText').initCluster()
    // TODO: 实际请求需要去掉注释
    this.get('multipleText').clusterPush()
      .then(() => {
        this.get('multipleText').getCluster()
      })

    // this.get('multipleText').getCluster()
    this.get('multipleText').getEmotion()
    this.get('multipleText').getWc()
  }
})

