import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import Layout from "./components/Layout";
import Explorer from "./pages/Explorer";
import Management from "./pages/Management";
import Statistics from "./pages/Statistics";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Profile from "./pages/User/Profile";
import { getMyInfo } from "./services/api/userController";
import useStore from "./store/store";

export function App() {
  const putUser = useStore((state) => state.putUser);

  // 用户刷新页面时，全局状态会丢失，需要重新请求接口判断用户是否登录，若已登录，则写入 state
  // React 18 在开发阶段如果代码被 React.StrictMode 包裹，useEffect 会执行两次，属于正常现象。生产阶段只会执行一次。
  useEffect(() => {
    getMyInfo().then((res) => {
      const { code, data } = res.data;
      if (code == 0) {
        putUser(data!);
      }
    });
  }, []);

  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path={ROUTES.EXPLORER + "/*"} element={<Explorer />} />
              <Route path={ROUTES.MANAGEMENT} element={<Management />} />
              <Route path={ROUTES.STATISTICS} element={<Statistics />} />
              <Route path={ROUTES.PROFILE} element={<Profile />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
