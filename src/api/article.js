import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/ui/data?eventId=ui-keyop-summary&probe=gushenxing&iface=eth0',
    method: 'get',
    params: query
  })
}
