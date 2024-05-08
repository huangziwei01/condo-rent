import request from './request'

// 新增
export function addMenu(data) {
  return request.post('/menu', data)
}

// 删除
export function deleteMenu(id) {
  return request.delete(`/menu/${id}`)
}

// 获取详情
export function getMenu(id) {
  return request.get(`/menu/${id}`)
}

// 获取列表
export function getMenuList(data) {
  return request.post('/menu/list', data)
}

// 更新
export function updateMenu(id, data) {
  return request.patch(`/menu/${id}`, data)
}
