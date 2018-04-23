export default function handleTag(data) {
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
