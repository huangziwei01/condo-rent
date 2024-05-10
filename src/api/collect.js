import request from './request'

// 新增
export function addCollect(data) {
  return request.post('/collect', data)
}

// 删除
export function deleteCollect(data) {
  return request.delete(`/collect`, data)
}

// 获取详情
export function getCollect(id) {
  return request.get(`/collect/${id}`)
}

// 获取列表
export function getCollectList(data) {
  return request.post('/collect/list', data)
}

// 更新
export function updateCollect(id, data) {
  return request.patch(`/collect/${id}`, data)
}
