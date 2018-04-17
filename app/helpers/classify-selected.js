import { helper } from '@ember/component/helper';

export function classifySelected(params/*, hash*/) {
  // return params;
  const data = params[0]
  const index = params[1]
  let selected = null
  switch (data) {
    case '体育':
      selected = 0
      break
    case '教育':
      selected = 1
      break
    case '财经':
      selected = 2
      break
    case '社会':
      selected = 3
      break
    case '娱乐':
      selected = 4
      break
    case '军事':
      selected = 5
      break
    case '国内':
      selected = 6
      break
    case '科技':
      selected = 7
      break
    case '互联网':
      selected = 8
      break
    case '房产':
      selected = 9
      break
    case '国际':
      selected = 10
      break
    case '女人':
      selected = 11
      break
    case '汽车':
      selected = 12
      break
    case '游戏':
      selected = 13
      break
    default:
      selected = 0
  }

  if(index === selected){
    return 'selected'
  }
}

export default helper(classifySelected);
