import request from './request'

// 新增
export function addRole(data) {
  return request.post('/role', data)
}

// 删除
export function deleteRole(id) {
  return request.delete(`/role/${id}`)
}

// 获取详情
export function getRole(id) {
  return request.get(`/role/${id}`)
}

// 获取列表
export function getRoleList(data) {
  return request.post('/role/list', data)
}

// 更新
export function updateRole(id, data) {
  return request.patch(`/role/${id}`, data)
}
