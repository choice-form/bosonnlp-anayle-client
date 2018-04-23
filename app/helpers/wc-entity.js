import { helper } from '@ember/component/helper';

export function wcEntity(params/*, hash*/) {
  // return params;
  const entity = params[0]
  switch (entity) {
    case 'location':
      return '地点'
    case 'product_name':
      return '产品名'
    case 'org_name':
      return '组织名'
    case 'time':
      return '时间'
    case 'person_name':
      return '人名'
    case 'job_title':
      return '职位'
    default:
      return ''
  }
}

export default helper(wcEntity);
