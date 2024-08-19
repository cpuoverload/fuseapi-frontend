import axios from "axios";

// 使用方法
//   apiClient
//     .request({
//       method: "get",
//       url: "/api/docs/example",
//     })
//     .then((res) => {
//       console.log(res);
//     });

const apiClient = axios.create({
  // 开发环境配置 baseURL 为 undefined，域名就会是开发服务器的域名，就会被代理。
  // todo: 改为线上域名
  baseURL: import.meta.env.PROD ? "https://xxx" : undefined,
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
    return Promise.reject(error);
  }
);

export default apiClient;
