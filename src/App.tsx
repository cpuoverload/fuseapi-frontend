import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import Layout from "./components/Layout";
import Explorer from "./pages/Explorer";
import Management from "./pages/Management";
import Statistics from "./pages/Statistics";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Profile from "./pages/User/Profile";

export function App() {
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
