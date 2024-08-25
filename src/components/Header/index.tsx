import { AppShell, Button, Group, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import UserAvatar from "../UserAvatar";
import useStore from "@/store/store";

const Index = (props) => {
  const { basePath } = props;
  const isLogin = useStore((state) => state.isLogin);

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
        <div
          style={{
            marginLeft: "auto",
            marginRight: "10px",
          }}
        >
          {isLogin ? (
            <UserAvatar />
          ) : (
            <Group>
              <Button variant="default" component={Link} to={ROUTES.LOGIN}>
                登录
              </Button>
              <Button variant="default" component={Link} to={ROUTES.REGISTER}>
                注册
              </Button>
            </Group>
          )}
        </div>
      </Group>
    </AppShell.Header>
  );
};

export default Index;
