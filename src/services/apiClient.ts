import { ERROR } from "@/const/const";
import axios from "axios";

const apiClient = axios.create({
  // baseURL 在开发环境配置为 path，域名默认是开发服务器的域名，会被代理。在生产环境配置为绝对 url。
  // todo: 改为线上域名
  baseURL: import.meta.env.PROD ? "https://xxx" : "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // 可以在此处添加 token 或其他请求前处理逻辑
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      // 未登录，跳转到登录页
      if (error.response.data.code == ERROR.UNLOGIN) {
        window.location.href = "/user/login";
        return;
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
