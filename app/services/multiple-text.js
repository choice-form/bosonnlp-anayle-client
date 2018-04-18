import Service from '@ember/service';
import { computed } from '@ember/object'

import { baseUrl, get, post } from '../utils'

import { multipleText as text } from './demo'

export default Service.extend({
  text: text[0].text,
  clusterTaskId: null,
  alpha: 0.8,
  beta: 0.45,
  // cluster: null,
  lineText: computed('text', function () {
    const list = this.text.split(/\n/g)
    return list.map(item => {
      return item.replace(/^\s+/, '')
    })
  }),
  cluster: [ // eslint-disable-line
    { _id: 1, num: 2, list: [1, 2] },
    { _id: 20, num: 2, list: [20, 21] },
    { _id: 22, num: 2, list: [22, 24] },
    { _id: 36, num: 2, list: [36, 37] }
  ],
  emotion: null,
  wc: null,
  initCluster() {
    const id = Math.floor((Math.random() * 100000))
    this.set('clusterTaskId', `cld_${id}`);
  },
  async clusterPush() {
    const pushUrl = `${baseUrl}/cluster/push/${this.clusterTaskId}`

    const query = this.lineText.map((item, index) => {
      const body = {
        id: index,
        text: item
      }
      return post(pushUrl, body)
    })

    const res = await Promise.all(query)
    return res
  },
  async getCluster() {
    const self = this
    const startUrl = `${baseUrl}/cluster/start/${this.clusterTaskId}?alpha=${this.alpha}&beta=${this.beta}`
    const statusUrl = `${baseUrl}/cluster/status/${this.clusterTaskId}`
    const resultUrl = `${baseUrl}/cluster/result/${this.clusterTaskId}`

    const startRes = await get(startUrl)
    console.log(startRes);

    const schedule = setInterval(() => {
      get(statusUrl).then(res => {
        switch (res.status) {
          case 'RECEIVED':
            console.log('成功接收到分析请求')
            break
          case 'DONE':
            window.clearInterval(schedule)
            get(resultUrl).then(result => {
              console.log(result)
              self.set('cluster', result)
            })
            break
          case 'RUNNING':
            console.log('数据分析正在进行中')
            break
          default:
            window.clearInterval(schedule)
            throw new Error(res.status)
        }
      })
    }, 5000)
  },
  async getEmotion(type = 'general') {
    const url = `${baseUrl}/sentiment/${type}`

    // TODO: 获取情感分析数据
    const fetchList = this.get('lineText')
    const body = {
      text: this.text
    }
    const data = await post(url, body)
  },
  async getWc() {

  }
});
