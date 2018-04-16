import { helper } from '@ember/component/helper';

export function nerEntity(params/*, hash*/) {
  // return params;
  const entity = params[0]
  console.log(entity);
  switch (entity) {
    case 'time':
      return '时间'
    case 'location':
      return '地点'
    case 'person_name':
      return '人名'
    case 'org_name':
      return '组织名'
    case 'company_name':
      return '公司名'
    case 'product_name':
      return '产品名'
    case 'job_title':
      return '职位'
    default:
      return entity
  }
}

export default helper(nerEntity);
