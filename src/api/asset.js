import request from '@/utils/request'

export function fetchAssets(params) {
  return request({
    url: '/assets/assets',
    method: 'get',
    params
  })
}

