import request from './request'

// 新增
export function addRoleMenu(data) {
  return request.post('/role_menu', data)
}

// 删除
export function deleteRoleMenu(id) {
  return request.delete(`/role_menu/${id}`)
}

// 获取详情
export function getRoleMenu(id) {
  return request.get(`/role_menu/${id}`)
}

// 获取列表
export function getRoleMenuList(data) {
  return request.post('/role_menu/list', data)
}

// 更新
export function updateRoleMenu(id, data) {
  return request.patch(`/role_menu/${id}`, data)
}
