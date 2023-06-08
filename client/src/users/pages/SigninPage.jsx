import React from "react";
import HeaderPage from "../../components/HeaderPage";
import { Avatar, Box, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Navigate } from "react-router-dom";
import { getColor } from "../../utils/colorModeInLocalStorage";
import ROUTES from "../../router/routesModel";
import useForm from "../../forms/hooks/useForm";
import useUsers from "../hooks/useUsers";
import signupSchema from "../models/joi-schema.js/signupSchema";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { useUser } from "../../providers/UserProviders";

const SigninPage = () => {
  const colorMode = getColor();
  const { user } = useUser();
  const { handleSignup } = useUsers();
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Box>
      <Box align="center">
        <HeaderPage
          title="Signup"
          subtitle="please Signup to create youe own vacation story"
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
            label="first Name"
            name="firstName"
            type="text"
            error={value.errors.firstName}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            color={colorMode === "dark" ? "secondary" : undefined}
          />
          <Input
            label="last Name"
            name="lastName"
            type="text"
            error={value.errors.lastName}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            color={colorMode === "dark" ? "secondary" : undefined}
          />
          <Input
            label="email"
            name="email"
            type="email"
            error={value.errors.email}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            color={colorMode === "dark" ? "secondary" : undefined}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={value.errors.password}
            onChange={rest.handleChange}
            data={value.data}
            variant="filled"
            color={colorMode === "dark" ? "secondary" : undefined}
          />
        </Form>
      </Container>
    </Box>
  );
};

export default SigninPage;
