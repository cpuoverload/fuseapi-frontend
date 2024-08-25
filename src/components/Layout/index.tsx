import { AppShell } from "@mantine/core";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import ROUTES from "@/routes";

const Index = (props) => {
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
      {props.children}
    </AppShell>
  );
};

export default Index;
