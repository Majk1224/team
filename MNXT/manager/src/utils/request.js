import axios from 'axios'

// create an axios instance

const service = axios.create({
   baseURL:"169.254.95.1:7001/",
   // withCredentials:true,// 跨域请求时发送 cookies
   timeout:5000
})

// request interceptor
service.interceptors.request.use(
    config =>{
       return config
    },
    error =>{
      return Promise.reject(error)
    }
)

  // response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
      return Promise.reject(error)
  }
)

export default service