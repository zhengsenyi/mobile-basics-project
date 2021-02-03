import request from '@/utils/request'
import {
  test
} from '@/utils/urls'

/** get请求 */
export function get(data) {
  return request({
    url: test,
    methods: 'get',
    params: data
  })
}

/** post请求 json格式 */
export function post(data) {
  return request({
    url: test,
    methods: 'post',
    params: data
  })
}

/** post请求 表单格式 */
export function posts(data) {
  return request({
    url: test,
    methods: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    params: data
  })
}