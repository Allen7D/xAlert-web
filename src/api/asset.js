import request from '@/utils/request'

function fetchAssets(params, surfix = '') {
  return request({
    url: `/assets/assets${surfix}`,
    method: 'get',
    params
  })
}

function fetchActiveAssets(pre_params, range) {
  const cur_params = Object.assign({range: range}, pre_params)
  return request({
    url: '/assets/activeassets',
    method: 'get',
    params: cur_params
  })
}

function fetchAssetsSummary(params) {
  return request({
    url: 'ui/data',
    method: 'get',
    params
  })
}

export default {
  fetchAssets,
  fetchActiveAssets,
  fetchAssetsSummary
}

// reload是基于缓存，速度快
// http://192.168.3.202:5001/api/assets/assets/reload
// http://192.168.3.202:5001/api/assets/assets/reload?probe=gushenxing&iface=eth0
// 从新载入到缓存，速度慢
// http://192.168.3.202:5001/api/assets/assets
// http://192.168.3.202:5001/api/assets/assets?probe=gushenxing&iface=eth0