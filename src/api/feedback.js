import request from './request'

// 新增
export function addFeedback(data) {
  return request.post('/feedback', data)
}

// 删除
export function deleteFeedback(id) {
  return request.delete(`/feedback/${id}`)
}

// 获取详情
export function getFeedback(id) {
  return request.get(`/feedback/${id}`)
}

// 获取列表
export function getFeedbackList(data) {
  return request.post('/feedback/list', data)
}

// 更新
export function updateFeedback(id, data) {
  return request.patch(`/feedback/${id}`, data)
}
