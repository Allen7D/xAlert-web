import request from '@/utils/request'

function fetchFlowRule(params) {
  return request({
    url: 'ui/data',
    method: 'get',
    params
  })
}

function initFlowRule(params) {
  return request({
    url: 'behaviours/flowrules',
    method: 'get',
    params
  })
}

function removeFlowRule(rule) {
  return request({
    url: 'behaviours/flowrule/' + rule._id,
    method: 'delete',
    data: rule
  })
}

function createFlowRule(rule) {
  return request({
    url: 'behaviours/flowrule',
    method: 'POST',
    data: rule
  })
}

export default {
  fetchFlowRule,
  initFlowRule,
  removeFlowRule,
  createFlowRule
}