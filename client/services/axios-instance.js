import axios from 'axios'
import { apiBaseUrl } from '@/configs'

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 8000,
  withCredentials: true,
})


// 配置请求拦截器，添加 JWT 令牌到请求头
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('userKey');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;