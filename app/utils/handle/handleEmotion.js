export default function handleEmotion(list, lineText) {
  if (Array.isArray(list)) {
    return list.map((item, index) => {
      return {
        text: lineText[index],
        reverse: item[0][0],
        front: item[0][1],
      }
    })
  }
  return null
}
