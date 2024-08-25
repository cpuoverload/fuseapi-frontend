import { AppShell, NavLink } from "@mantine/core";
import { Link, Routes, Route, useLocation, Navigate } from "react-router-dom";
import ROUTES from "@/routes";
import ApiDetail from "./ApiDetail";

const Index = (props) => {
  const location = useLocation();

  // 没有带 id 时自动重定向到首个 api
  if (location.pathname === ROUTES.EXPLORER) {
    return <Navigate to={ROUTES.EXPLORER + ROUTES.API + "/1"} />;
  }

  return (
    <>
      <AppShell.Navbar p="md">
        <NavLink
          component={Link}
          to={ROUTES.EXPLORER + ROUTES.API + "/1"}
          label="getUserNameByPost"
          active={location.pathname === ROUTES.EXPLORER + ROUTES.API + "/1"}
        />
        <NavLink
          component={Link}
          to={ROUTES.EXPLORER + ROUTES.API + "/2"}
          label="getWeather"
          active={location.pathname === ROUTES.EXPLORER + ROUTES.API + "/2"}
        />
        <NavLink
          component={Link}
          to={ROUTES.EXPLORER + ROUTES.API + "/3"}
          label="getNameByGet"
          active={location.pathname === ROUTES.EXPLORER + ROUTES.API + "/3"}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
          <Route path={ROUTES.API + "/:id"} element={<ApiDetail />} />
        </Routes>
      </AppShell.Main>
    </>
  );
};

export default Index;
