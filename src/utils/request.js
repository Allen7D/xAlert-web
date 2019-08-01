import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API // api的base_url
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  config.headers['Accept'] = 'application/json'
  config.headers['Content-Type'] = 'application/json; charset=utf-8'
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

export default service
