import React from "react";
import { Box, Container } from "@mui/material";
import { Navigate } from "react-router-dom";

import HeaderPage from "../../components/HeaderPage";
import { useUser } from "../../providers/UserProviders";
import useForm from "../../forms/hooks/useForm";
import forgotPasswordSchema from "../models/joi-schema/forgotPasswordSchema";
import ROUTES from "../../router/routesModel";
import useForgotPassword from "../hooks/useForgotPassword";
import PasswordForm from "../components/PasswordForm";

const ForgotPasswordPage = () => {
  const data = { email: "" };
  const { user } = useUser();
  const { handleForgotPassword } = useForgotPassword();
  const { value, ...rest } = useForm(
    data,
    forgotPasswordSchema,
    handleForgotPassword
  );

  if (user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Box>
      <HeaderPage
        title="forgot password ?"
        subtitle="please enter your email"
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <PasswordForm
          title="forgot-password"
          onSubmit={rest.onForgotPassword}
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

export default ForgotPasswordPage;
