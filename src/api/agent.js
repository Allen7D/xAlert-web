import request from '@/utils/request'

export function fetchAgents() {
  return request({
    url: '/agents',
    method: 'get'
  })
}
