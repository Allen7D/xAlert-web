import request from '@/utils/request'

export function fetchAssets(params, surfix = '') {
  return request({
    url: `/assets/assets${surfix}`,
    method: 'get',
    params
  })
}

export function fetchActiveAssets(pre_params, range) {
  const cur_params = Object.assign({range: range}, pre_params)
  return request({
    url: '/assets/activeassets',
    method: 'get',
    params: cur_params
  })
}