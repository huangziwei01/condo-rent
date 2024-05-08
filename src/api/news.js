import request from './request'

// 新增
export function addNews(data) {
  return request.post('/news', data)
}

// 删除
export function deleteNews(id) {
  return request.delete(`/news/${id}`)
}

// 获取详情
export function getNews(id) {
  return request.get(`/news/${id}`)
}

// 获取列表
export function getNewsList(data) {
  return request.post('/news/list', data)
}

// 更新
export function updateNews(id, data) {
  return request.patch(`/news/${id}`, data)
}
