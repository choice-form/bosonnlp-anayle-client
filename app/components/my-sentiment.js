import Component from '@ember/component';
import { computed } from '@ember/object'

import echarts from 'echarts'

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
  chartData: computed('data', function () {
    console.log(this.get('data'))
    let front, reverse;
    try {
      front = this.data[0][0]
      reverse = this.data[0][1]
    } catch (error) {
      front = null
      reverse = null
    }

    return {
      // 'title': {
      //   text: '情感分析'
      // },
      legend: {
        // bottom: 10,
        left: 'center',
        data: ['正面指数', '负面指数']
      },
      tooltip:{
        trigger:'item'
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['50%', '55%'],
          data: [
              { value: front, name: '正面指数' },
              { value: reverse, name: '负面指数' }
            ]
        }
      ]
    }
  }),
  actions: {
    selectSentiment(value) {
      console.log(value)
      this.set('selected', value)
      this.get('selectSentiment')(this.list[value].value)
    }
  },
  didRender() {
    this._super(...arguments)
    if (this.data) {
      this.chart = echarts.init(document.getElementById('chart'))
      this.chart.setOption(this.get('chartData'))
    }
  }
});
