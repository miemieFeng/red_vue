import request from '@/utils/request'

// 查询博主列表
export function listBlogger(query) {
  return request({
    url: '/system/blogger/list',
    method: 'get',
    params: query
  })
}

// 查询博主详细
export function getBlogger(id) {
  return request({
    url: '/system/blogger/' + id,
    method: 'get'
  })
}

// 新增博主
export function addBlogger(data) {
  return request({
    url: '/system/blogger',
    method: 'post',
    data: data
  })
}

// 修改博主
export function updateBlogger(data) {
  return request({
    url: '/system/blogger',
    method: 'put',
    data: data
  })
}

// 删除博主
export function delBlogger(id) {
  return request({
    url: '/system/blogger/' + id,
    method: 'delete'
  })
}
