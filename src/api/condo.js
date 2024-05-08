import request from './request'

// 新增房屋
export function addCondo(data) {
  return request.post('/condo', data)
}

// 删除房屋
export function deleteCondo(id) {
  return request.delete(`/condo/${id}`)
}

// 获取房屋详情
export function getCondo(id) {
  return request.get(`/condo/${id}`)
}

// 获取房屋列表
export function getCondoList(data) {
  return request.post('/condo/list', data)
}

// 更新房屋
export function updateCondo(id, data) {
  return request.patch(`/condo/${id}`, data)
}
