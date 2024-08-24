import { AppShell, Group, NavLink, Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";

const Index = (props) => {
  const { basePath } = props;

  return (
    <AppShell.Header>
      <Group h="100%" px="md">
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
  );
};

export default Index;
