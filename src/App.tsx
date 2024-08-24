import { AppShell } from "@mantine/core";
import { Routes, Route, useLocation } from "react-router-dom";
import ROUTES from "./routes";
import Header from "./components/Header";
import Explorer from "./pages/Explorer";
import Management from "./pages/Management";
import Statistics from "./pages/Statistics";

export function App() {
  // useLocation() 在 url 变化时会重渲染整个组件
  const location = useLocation();
  const basePath = "/" + location.pathname.split("/")[1];
  const showNavbar = basePath === ROUTES.EXPLORER;

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      // 侧边栏
      navbar={
        showNavbar
          ? {
              width: 300,
              breakpoint: "sm",
            }
          : undefined
      }
    >
      <Header basePath={basePath} />
      <Routes>
        <Route path={ROUTES.EXPLORER + "/*"} element={<Explorer />} />
        <Route path={ROUTES.MANAGEMENT} element={<Management />} />
        <Route path={ROUTES.STATISTICS} element={<Statistics />} />
      </Routes>
    </AppShell>
  );
}

export default App;
