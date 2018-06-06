import request from '@/utils/request'

function fetchAgents() {
  return request({
    url: '/agents',
    method: 'get'
  })
}

export default {
  fetchAgents
}
