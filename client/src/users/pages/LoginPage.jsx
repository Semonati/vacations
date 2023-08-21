import { Avatar, Box, Container } from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Navigate } from "react-router-dom";

import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../router/routesModel";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import useUsers from "../hooks/useUsers";
import loginSchema from "../models/joi-schema/loginSchema";
import HeaderPage from "../../components/HeaderPage";
import { useUser } from "../../providers/UserProviders";
import UserForm from "../components/UserForm";

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
      <Box display="flex" flexDirection="column" alignItems="center">
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
        <UserForm
          title="login"
          onSubmit={() => rest.onSubmit("login")}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
          errors={value.errors}
          data={value.data}
          onInputChange={rest.handleChange}
        />
      </Container>
    </Box>
  );
};

export default LoginPage;
