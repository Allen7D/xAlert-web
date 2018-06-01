import request from '@/utils/request'

export function fetchKeyopRule(params) {
  return request({
    url: 'ui/data',
    method: 'get',
    params
  })
}

export function initKeyopRule(params) {
  return request({
    url: 'controldevices/keyoprules',
    method: 'get',
    params
  })
}

export function removeKeyopRule(rule) {
  return request({
    url: 'controldevices/keyoprule/' + rule._id,
    method: 'delete',
    data: rule
  })
}

export function createKeyopRule(rule) {
  return request({
    url: 'controldevices/keyoprule',
    method: 'POST',
    data: rule
  })
}

export function fetchKeyopRuleList() {
  return request({
    url: 'availablerules',
    method: 'get'
  })
}

export function fetchKeyopEvent(params) {
  return request({
    url: 'controldevices/keyoprule/eventswithrange',
    method: 'get',
    params
  })
}