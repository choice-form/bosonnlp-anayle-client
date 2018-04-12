import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

function handleData(data) {
  const arr = data.map(item => {
    const text = {
      list: [],
      tag: []
    }
    text.tag = new Set(item.tag)
    for (let i = 0; i < item.word.length; i++) {
      const obj = {}
      obj.word = item.word[i]
      obj.tag = item.tag[i]
      text.list.push(obj)
    }
    return text
  })
  return arr
}

export default Component.extend({
  // singleText: service()
  single: service('single-text'),
  data: computed(function () {
    // return this.get('single').tag()
    const result = this.get('single').tag()
    const res = handleData(result)
    console.log(res)
    return res
  }),
  tag: computed('data', function () {

  })

  // data: computed(function () {
  //   return this.get('single').tag()
  // })
});
