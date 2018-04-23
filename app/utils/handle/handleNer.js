export default function handleNer(data) {
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
