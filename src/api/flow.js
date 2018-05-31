import request from '@/utils/request'

export function fetchFlowRule(params) {
  return request({
    url: 'ui/data',
    method: 'get',
    params
  })
}

export function initFlowRule(params) {
  return request({
    url: 'behaviours/flowrules',
    method: 'get',
    params
  })
}

export function removeFlowRule(rule) {
  return request({
    url: 'behaviours/flowrule/' + rule._id,
    method: 'delete',
    data: rule
  })
}

export function createFlowRule(rule) {
  return request({
    url: 'behaviours/flowrule',
    method: 'POST',
    data: rule
  })
}
