import request from '@/utils/request'

export function fetchSeverity(params) {
  return request({
    url: 'ui/data',
    method: 'get',
    params
  })
}
