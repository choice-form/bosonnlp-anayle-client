import Service from '@ember/service';

import { baseUrl, get, post } from '../utils'

import { multipleText as text } from './demo'

export default Service.extend({
  text: text[0].text,
  clusterTaskId: null,
  clusterId: null,
  alpha: 0.8,
  beta: 0.45,
  cluster: null,
  emotion: null,
  wc: null,
  initCluster() {
    this.set('clusterTaskId', '0001');
    this.set('clusterId', 'cluster_001')
  },
  async clusterPush() {
    const pushUrl = `${baseUrl}/cluster/push/${this.clusterTaskId}`


    const body = {
      id: this.clusterId,
      text: this.text
    }
    const res = await post(pushUrl, body)
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
    }, 1000)
  },
  async getEmotion() {

  },
  async getWc() {

  }
});
