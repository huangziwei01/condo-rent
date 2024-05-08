import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, // 请求超时时间
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做些什么
    // 例如，添加认证信息、修改请求头等
    // 请求头中携带token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    // 例如，检查响应状态码、处理响应数据等
    return response.data
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default instance
