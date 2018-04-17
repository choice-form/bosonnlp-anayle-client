import Component from '@ember/component';

export default Component.extend({
  selected: 0,
  list: [ // eslint-disable-line
    { index: 0, name: '体育' },
    { index: 1, name: '教育' },
    { index: 2, name: '财经' },
    { index: 3, name: '社会' },
    { index: 4, name: '娱乐' },
    { index: 5, name: '军事' },
    { index: 6, name: '国内' },
    { index: 7, name: '科技' },
    { index: 8, name: '互联网' },
    { index: 9, name: '房产' },
    { index: 10, name: '国际' },
    { index: 11, name: '女人' },
    { index: 12, name: '汽车' },
    { index: 13, name: '游戏' },
  ],
});
