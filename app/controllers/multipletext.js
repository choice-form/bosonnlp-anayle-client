import Controller from '@ember/controller';
import { computed } from '@ember/object'
import { inject } from '@ember/service'

import { multipleText as text } from '../services/demo'

export default Controller.extend({
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
  cloud: computed('multipleText.cloud', function () {
    return this.get('multipleText').cloud
  }),
  wc: computed('multipleText.wc', function () {
    return this.get('multipleText').wc
  }),
  actions: {
    changeText(index) {
      this.get('multipleText').set('text', text[index].text)
    },
    sizeChange(value) {
      this.get('multipleText').set('alpha', value.alpha)
      this.get('multipleText').set('beta',value.beta)
      // TODO: 实际请求需要去掉注释
      // this.get('multipleText').getCluster()
    }
  },
  init() {
    this._super(...arguments)
    this.initGet()
  },
  initGet() {
    this.get('multipleText').initCluster()
    // TODO: 实际请求需要去掉注释
    // this.get('multipleText').clusterPush()
    //   .then(() => {
    //     this.get('multipleText').getCluster()
    //   })
  }
})

