import request from '@/utils/request'

// netEventData & eventListData & eventsDistributionData
export function fetchList(query) {
  return request({
    url: '/api/ui/data?eventId=ui-keyop-summary&probe=gushenxing&iface=eth0',
    method: 'get',
    params: query
  })
}

// ?
export function handleDataBox(query) {
  return request({
    url: '/api/ui/data?eventId=ui-dashboard-summary&probe=gushenxing&iface=eth0',
    method: 'get',
    params: query
  })
}

// netFlowData
export function getNetFlow() {
  return request({
    url: '/api/ui/data?eventId=ui-flows-summary&probe=gushenxing&iface=eth0',
    method: 'get'
  })
}
