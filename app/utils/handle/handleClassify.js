export default function handleClassify(data) {
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
