import request from '@/utils/request'

export function removeFirewallRule(rule) {
  return request({
    url: 'behaviours/firewallrule/' + rule._id,
    method: 'delete',
    data: rule
  })
}

export function initFirewallRule(params) {
  return request({
    url: 'behaviours/firewallrules',
    method: 'get',
    params
  })
}

export function createFirewallRule(rule) {
  return request({
    url: 'behaviours/firewallrule',
    method: 'post',
    data: rule
  })
}
