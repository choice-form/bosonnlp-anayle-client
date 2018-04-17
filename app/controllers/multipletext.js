import Controller from '@ember/controller';
import { computed } from '@ember/object'
import { inject } from '@ember/service'

import { multipleText as text } from '../services/demo'

export default Controller.extend({
  multipleText: inject('multiple-text'),
  text: computed('multipleText.text', function () {
    return this.get('multipleText').text
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
    }
  },
  init() {
    this._super(...arguments)
    this.initGet()
  },
  initGet() {
    this.get('multipleText').initCluster()
    this.get('multipleText').clusterPush()
      .then(() => {
        this.get('multipleText').getCluster()
      })
  }
})

