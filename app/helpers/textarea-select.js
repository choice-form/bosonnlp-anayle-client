import { helper } from '@ember/component/helper';

export function textareaSelect(params/*, hash*/) {
  // return params;
  const index = params[0]
  let selected = params[1]
  if (index === selected) {
    return 'selected'
  }
}

export default helper(textareaSelect);
