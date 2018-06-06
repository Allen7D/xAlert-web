import request from '@/utils/request'

function fetchKeyopRule(params) {
  return request({
    url: 'ui/data',
    method: 'get',
    params
  })
}

function initKeyopRule(params) {
  return request({
    url: 'controldevices/keyoprules',
    method: 'get',
    params
  })
}

function removeKeyopRule(rule) {
  return request({
    url: 'controldevices/keyoprule/' + rule._id,
    method: 'delete',
    data: rule
  })
}

function createKeyopRule(rule) {
  return request({
    url: 'controldevices/keyoprule',
    method: 'POST',
    data: rule
  })
}

function fetchKeyopRuleList() {
  return request({
    url: 'availablerules',
    method: 'get'
  })
}

function fetchKeyopEvent(params) {
  return request({
    url: 'controldevices/keyoprule/eventswithrange',
    method: 'get',
    params
  })
}

export default {
  fetchKeyopRule,
  initKeyopRule,
  removeKeyopRule,
  createKeyopRule,
  fetchKeyopRuleList,
  fetchKeyopEvent
}