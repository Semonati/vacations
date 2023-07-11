import React from "react";
import { Box } from "@mui/material";
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
    <Box width="100%">
      <HeaderPage
        title="forgot you password ?"
        subtitle="please enter your email"
      />
      <PasswordForm
        title="forgot-password"
        onSubmit={rest.onForgotPassword}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        errors={value.errors}
        data={value.data}
        onInputChange={rest.handleChange}
      />
    </Box>
  );
};

export default ForgotPasswordPage;
