import request from '@/utils/request'

// 查询Pr列表列表
export function listPr(query) {
  return request({
    url: '/admin/pr/list',
    method: 'get',
    params: query
  })
}

// 查询Pr列表详细
export function getPr(id) {
  return request({
    url: '/admin/pr/' + id,
    method: 'get'
  })
}

// 新增Pr列表
export function addPr(data) {
  return request({
    url: '/admin/pr',
    method: 'post',
    data: data
  })
}

// 修改Pr列表
export function updatePr(data) {
  return request({
    url: '/admin/pr',
    method: 'put',
    data: data
  })
}

// 删除Pr列表
export function delPr(id) {
  return request({
    url: '/admin/pr/' + id,
    method: 'delete'
  })
}
