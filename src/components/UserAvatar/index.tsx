import { forwardRef } from "react";
import { Avatar, Menu, rem } from "@mantine/core";
import { IconLogout, IconUserCircle, IconLanguage } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ROUTES from "@/routes";

const Index = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    return (
      <Menu withArrow width={250} position="bottom">
        <Menu.Target>
          <Avatar
            ref={ref}
            name="猪猪侠"
            color="initials"
            style={{ cursor: "pointer" }}
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            component={Link}
            to={ROUTES.PROFILE}
            leftSection={
              <IconUserCircle style={{ width: rem(16), height: rem(16) }} />
            }
          >
            个人中心
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconLanguage style={{ width: rem(16), height: rem(16) }} />
            }
          >
            语言
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconLogout
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            注销
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  }
);

export default Index;
