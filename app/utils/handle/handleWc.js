// import handleNer from './handleNer'

export default function handleWc(list) {
  if (!Array.isArray(list)) {
    return null
  }
  const array = []
  let entityArray = []
  let wordArray = []
  list.forEach(texts => {
    texts.forEach(text => {
      text.entity.forEach(ety => {
        const words = text.word.slice(ety[0], ety[1])
        const word = words.join('')
        const obj = {
          word,
          entity: ety[2]
        }
        // return obj
        entityArray.push(ety[2])
        wordArray.push(word)
        array.push(obj)
      })
    })
  })

  const entitys = [...new Set(entityArray)]
  const words = [...new Set(wordArray)]

  const wc = []
  words.forEach(word => {
    let num = 0
    let entity = ''
    array.forEach(item => {
      if (word === item.word) {
        entity = item.entity
        num++
      }
    })

    wc.push({
      num,
      word,
      entity
    })
  })
  return {
    entity: entitys,
    wc
  }
}
