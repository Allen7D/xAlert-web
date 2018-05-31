import request from '@/utils/request'
// get请求的函数用fetch作前缀
// post请求的函数用create作前缀
// put请求的函数用modify前缀
// delete请求的函数用remove作前缀
export function fetchList() {
  return request({
    url: '/list',
    method: 'get'
  })
}

export function createList() {
  return request({
    url: '/list',
    method: 'post'
  })
}

export function modifyList() {
  return request({
    url: '/list',
    method: 'put'
  })
}

export function removeList() {
  return request({
    url: '/list',
    method: 'delete'
  })
}
