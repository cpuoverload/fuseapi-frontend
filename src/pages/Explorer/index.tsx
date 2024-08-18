import { AppShell, NavLink } from "@mantine/core";
import { Link, Routes, Route } from "react-router-dom";
import ROUTES from "@/routes";
import ApiDetail from "./ApiDetail";

const Index = () => {
  return (
    <>
      <AppShell.Navbar p="md">
        <NavLink
          component={Link}
          to={ROUTES.EXPLORER + ROUTES.API + "/1"}
          label="getUserNameByPost"
        />
        <NavLink
          component={Link}
          to={ROUTES.EXPLORER + ROUTES.API + "/2"}
          label="getWeather"
        />
        <NavLink
          component={Link}
          to={ROUTES.EXPLORER + ROUTES.API + "/3"}
          label="getNameByGet"
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
