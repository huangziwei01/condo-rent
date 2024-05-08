import request from './request'

// 用户注册
export function register(data) {
  return request.post('/user/register', data)
}

// 用户登录
export function login(data) {
  return request.post('/login', data)
}

//查询用户信息
export function getUser(id) {
  return request.get(`/user/${id}`)
}

// 新增
export function addUser(data) {
  return request.post('/user', data)
}

// 删除
export function deleteUser(id) {
  return request.delete(`/user/${id}`)
}

// 获取列表
export function getUserList(data) {
  return request.post('/user/list', data)
}

// 更新
export function updateUser(id, data) {
  return request.patch(`/user/${id}`, data)
}
