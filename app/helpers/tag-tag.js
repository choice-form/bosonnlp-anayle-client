import { helper } from '@ember/component/helper';

const list = [
  {
    name: '名词',
    values: ['n', 'nr', 'nrl', 'nrf', 'nt', 'nz', 'nl']
  }, {
    name: '动词',
    values: ['v', 'vd', 'vshi', 'vyou', 'vi', 'vl']
  }, {
    name: '时间词',
    values: ['t']
  }, {
    name: '介词',
    values: ['p', 'pba', 'pbei']
  }, {
    name: '地名',
    values: ['ns']
  }, {
    name: '助词',
    values: ['u', 'uzhe', 'ule', 'uguo', 'ude', 'usuo', 'udeng', 'uyy', 'udh', 'uzhi', 'ulian']
  }, {
    name: '标点符号',
    values: ['w', 'wkz', 'wky', 'wyy', 'wyz', 'wj', 'ww', 'wt', 'wd', 'wf', 'wn', 'wm', 'ws', 'wp', 'wb', 'wh']
  }, {
    name: '专有名词',
    values: ['nz']
  }, {
    name: '副词',
    values: ['d', 'dl']
  }, {
    name: '数词',
    values: ['m']
  }, {
    name: '量词',
    values: ['q']
  }, {
    name: '处所词',
    values: ['s']
  }, {
    name: '方位词',
    values: ['f']
  }, {
    name: '字符串',
    values: ['nx']
  }, {
    name: '连词',
    values: ['c']
  }, {
    name: '形容词',
    values: ['a', 'ad', 'an', 'al']
  }, {
    name: '代词',
    values: ['r']
  }, {
    name: '区别词',
    values: ['b', 'bl']
  }, {
    name: '状态词',
    values: ['z']
  }, {
    name: '语气词',
    values: ['y']
  }, {
    name: '拟声词',
    values: ['o']
  }, {
    name: '前缀',
    values: ['h']
  }, {
    name: '后缀',
    values: ['k']
  }, {
    name: '电子邮箱',
    values: ['email']
  }, {
    name: '电话号码',
    values: ['tel']
  }, {
    name: '身份证号',
    values: ['id']
  }, {
    name: '网址',
    values: ['url']
  }
]


export function tagTag(params/*, hash*/) {
  // return params;
  const tag = params[0]
  const obj = list.find(item => {
    const index = item.values.findIndex(value => {
      return value === tag
    })
    if (index > -1) {
      return true
    }
  })

  return obj.name
}

export default helper(tagTag);
