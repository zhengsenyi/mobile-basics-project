import axios from 'axios'
import router from '../router'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.VUE_APP_API, // 请求接口路径
  withCredentials: true, // 是否允许携带cookie
  timeout: 15000, // 超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers['token'] = localStorage.getItem('token') || ''
    config.headers['source'] = 'MOBILE'
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 1) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => { // 响应状态码不为 200
    if (!error.response) {
      return Promise.reject(error)
    } else {
      const err = error.response
      if (err.status) {
        switch (err.status) {
          case 401: // 未登录
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
            break;
          default: // 其他错误直接弹窗提示
            
        }
      }
      return Promise.reject(err)
    }
  }
)

export default service 