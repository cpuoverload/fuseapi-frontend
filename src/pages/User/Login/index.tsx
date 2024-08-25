import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  LoadingOverlay,
} from "@mantine/core";
import { useForm, hasLength } from "@mantine/form";
import { Link } from "react-router-dom";
import { USERNAME, PASSWORD } from "@/const/const";
import { login } from "@/services/api/userController";
import ROUTES from "@/routes";
import notification from "@/utils/notification";

const Index = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { [USERNAME]: "", [PASSWORD]: "" },
    validate: {
      [USERNAME]: hasLength(
        { min: 6 },
        USERNAME + " must be at least 6 characters"
      ),
      [PASSWORD]: hasLength(
        { min: 8 },
        PASSWORD + " must be at least 8 characters"
      ),
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const submit = async (values: typeof form.values) => {
    setIsLoading(true);
    try {
      const res = await login({
        username: values[USERNAME],
        password: values[PASSWORD],
      });
      const { code, message } = res.data;
      if (code == 0) {
        notification.success("登录成功");
      } else {
        notification.fail(message!);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">登录</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        还没有账号？{" "}
        <Anchor size="sm" component={Link} to={ROUTES.REGISTER}>
          去注册
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" pos="relative">
        <LoadingOverlay
          visible={isLoading}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <form onSubmit={form.onSubmit(submit)}>
          <TextInput
            {...form.getInputProps(USERNAME)}
            key={form.key(USERNAME)}
            label="用户名"
            placeholder={USERNAME}
            required
          />
          <PasswordInput
            {...form.getInputProps(PASSWORD)}
            key={form.key(PASSWORD)}
            label="密码"
            placeholder={PASSWORD}
            required
            mt="md"
          />
          <Button type="submit" fullWidth mt="xl">
            提交
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Index;
