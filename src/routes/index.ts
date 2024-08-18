const ROUTES = {
  EXPLORER: "/explorer", // 注意最前面一定要加 /
  API: "/api", // 作为 /explorer 的嵌套路由，Route path prop 要略去 /explorer 部分，但 Link to prop 不能略去
  MANAGEMENT: "/management",
  STATISTICS: "/statistics",
};

export default ROUTES;
