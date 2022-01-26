import axios from 'axios'

// axios配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:10010'

// 拦截器
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = this.$qs.parse(config.data)
  }
},
(error) => {
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (!res.data.success) {
    this.$message(res.data.message)
    return Promise.reject(res)
  }
  return res
},
(error) => {
  return Promise.reject(error)
}
)
