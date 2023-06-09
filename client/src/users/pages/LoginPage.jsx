import {
  Avatar,
  Box,
  Container,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Navigate } from "react-router-dom";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../router/routesModel";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import useUsers from "../hooks/useUsers";
import loginSchema from "../models/joi-schema/loginSchema";
import HeaderPage from "../../components/HeaderPage";
import { useUser } from "../../providers/UserProviders";

const LoginPage = () => {
  const { user } = useUser();
  const { handleLogin } = useUsers();
  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Box>
      <Box align="center">
        <HeaderPage
          title="Login"
          subtitle="please login to create youe own vacation story"
        />
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
      </Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Form
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
          styles={{ maxWidth: "450px" }}
          to={ROUTES.ROOT}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={value.errors.email}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={value.errors.password}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
          />
        </Form>
      </Container>
    </Box>
  );
};

export default LoginPage;
