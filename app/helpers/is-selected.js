import { helper } from '@ember/component/helper';

export function isSelected(params/*, hash*/) {
  let value = params[0]
  let selected = params[1]
  if (value === selected) {
    return 'selected'
  }
  return null
}

export default helper(isSelected);
