import { AppShell, Group, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import UserAvatar from "../UserAvatar";

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
        <UserAvatar />
      </Group>
    </AppShell.Header>
  );
};

export default Index;
