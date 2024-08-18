import { AppShell, Burger, Group, NavLink, Avatar } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ROUTES from "./routes";
import Explorer from "./pages/Explorer";
import Management from "./pages/Management";
import Statistics from "./pages/Statistics";

export function App() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const basePath = "/" + location.pathname.split("/")[1];
  const showNavbar = basePath === ROUTES.EXPLORER;

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      navbar={
        showNavbar
          ? {
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }
          : undefined
      }
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          FuseAPI
          <NavLink
            style={{ width: "auto" }}
            component={Link}
            to={ROUTES.EXPLORER}
            label="接口调试"
            active={basePath === ROUTES.EXPLORER}
            variant="subtle"
          />
          <NavLink
            style={{ width: "auto" }}
            component={Link}
            to={ROUTES.MANAGEMENT}
            label="接口管理"
            active={basePath == ROUTES.MANAGEMENT}
            variant="subtle"
          />
          <NavLink
            style={{ width: "auto" }}
            component={Link}
            to={ROUTES.STATISTICS}
            label="接口统计数据"
            active={basePath == ROUTES.STATISTICS}
            variant="subtle"
          />
          <Avatar
            src={"/src/assets/ggbond.jpeg"}
            style={{
              marginLeft: "auto",
              marginRight: "10px",
            }}
          />
        </Group>
      </AppShell.Header>
      <Routes>
        <Route path={ROUTES.EXPLORER + "/*"} element={<Explorer />} />
        <Route path={ROUTES.MANAGEMENT} element={<Management />} />
        <Route path={ROUTES.STATISTICS} element={<Statistics />} />
      </Routes>
    </AppShell>
  );
}

export default App;
