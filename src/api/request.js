
import axios from 'axios'

const axiosRequest = axios.create({
  baseURL: `${process.env.GRIDSOME_API_URL}`,
  timeout: 3000,
  headers: {
    'Content-Type': "application/json;charset=UTF-8",
  }
});

axiosRequest.interceptors.request.use(function (config) {
  if (window.localStorage.getItem('userInfo')) {
    let token = JSON.parse(window.localStorage.getItem('userInfo'))
    token && (config.headers.Authorization = `Bearer ${token.jwt}`)
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 服务器返回数据
axiosRequest.interceptors.response.use(
  (response) => {
    console.log('response', response)
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  }, (err) => {
    console.log('err', err)
    if (err.response.status === 401) {
      window.localStorage.clear()
      window.location.replace('/Login')
    } else if (err.response.status === 403) {
      window.location.replace('/Login')
    }
    return Promise.reject(err)
  }
)


export default axiosRequest