import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  singleText: inject('single-text'),
  tag: computed('singleText.tag', function () {
    const data = handleTag(this.get('singleText').get('tag'))
    // console.log(data)
    return data
  }),
  keywords: computed('singleText.keywords', function () {
    const data = this.get('singleText').get('keywords')
    return data
  }),
  ner: computed('singleText.ner', function () {
    const data = handleNer(this.get('singleText').ner)
    return data
  }),
  // getSentiment
  sentiment: computed('singleText.sentiment', function () {
    const data = this.get('singleText').sentiment
    // console.log(data);
    return data
  }),
  classify: computed('singleText.classify', function () {
    const data = handleClassify(this.get('singleText').classify)
    return data
  }),
  suggest: computed('singleText.suggest', function () {
    const data = this.get('singleText').suggest
    return data
  }),
  summary:computed('singleText.summary',function(){
    const data = this.get('singleText').summary
    return data
  }),
  keywordsForSuggest: computed('singleText.keywordsForSuggest', function () {
    return this.get('singleText').keywordsForSuggest
  }),
  actions: {
    submit(text) {
      this.get('singleText').set('text', text)
      this.get('singleText').getTag()
      this.get('singleText').getNer()
      this.get('singleText').getKeywords().then(() => {
        this.get('singleText').getSuggest()
      })
      this.get('singleText').getSentiment()
      this.get('singleText').getClassify()
      this.get('singleText').getSummary()
    },
    selectNer(value) {
      this.get('singleText').getNer(value)
    },
    selectSummary(value) {
      this.get('singleText').getSummary(value)
    },
    selectSentiment(value) {
      this.get('singleText').getSentiment(value)
    }
  }
});

function handleTag(data) {
  if (!Array.isArray(data)) {
    return []
  }
  const arr = data.map(item => {
    const text = {
      list: [],
      tag: []
    }
    text.tag = [...new Set(item.tag)]
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

function handleNer(data) {
  if (!Array.isArray(data)) {
    return []
  }
  const arr = data.map(item => {
    const text = {
      list: [],
      entity: [],
      originEntity: []
    }

    text.list = item.word.map(i => {
      return {
        value: i,
        entity: null
      }
    })

    // 提取实体到value
    item.entity.forEach(ety => {
      const start = ety[0]
      const end = ety[1]
      const name = ety[2]

      text.entity.push(name)

      const word = {
        values: [],
        value: null,
        entity: {
          start,
          end,
          name
        }
      }
      for (let i = start; i < end; i++) {
        word.values.push(item.word[i])
      }

      word.value = word.values.join('')

      for (let i = start; i < end; i++) {
        text.list[i] = { value: word.value, entity: name }
      }

      text.originEntity.push(word)

    })

    text.entity = [...new Set(text.entity)]

    const list = []
    for (let i = 0; i < text.list.length; i++) {
      if (list.length === 0) {
        list.push(text.list[i])
      } else {
        if (list[list.length - 1].value !== text.list[i].value) {
          list.push(text.list[i])
        }
      }
    }
    text.list = list
    return text
  })

  return arr
}

function handleClassify(data) {
  if (!Array.isArray(data)) {
    return null
  }

  const str = parseInt(data[0])

  switch (str) {
    case 0:
      return '体育'
    case 1:
      return '教育'
    case 2:
      return '财经'
    case 3:
      return '社会'
    case 4:
      return '娱乐'
    case 5:
      return '军事'
    case 6:
      return '国内'
    case 7:
      return '科技'
    case 8:
      return '互联网'
    case 9:
      return '房产'
    case 10:
      return '国际'
    case 11:
      return '女人'
    case 12:
      return '汽车'
    case 13:
      return '游戏'
    default:
      return ''
  }
}
