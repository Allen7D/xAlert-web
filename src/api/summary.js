import request from '@/utils/request'

export function fetchSummary(params) {
  return request({
    url: 'ui/data',
    method: 'get',
    params
  })
}