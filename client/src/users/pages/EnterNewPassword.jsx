import React from "react";
import { Box } from "@mui/material";

import HeaderPage from "../../components/HeaderPage";
import PasswordForm from "../components/PasswordForm";
import { useUser } from "../../providers/UserProviders";
import useForgotPassword from "../hooks/useForgotPassword";
import useForm from "../../forms/hooks/useForm";
import initialResetPasswordForm from "../helpers/initialForms/initialResetPasswordForm";
import resetPasswordSchema from "../models/joi-schema/resetPasswordSchema";
import { Navigate } from "react-router-dom";
import ROUTES from "../../router/routesModel";

const EnterNewPassword = () => {
  const { user } = useUser();
  const { handleResetPassword } = useForgotPassword();
  const { value, ...rest } = useForm(
    initialResetPasswordForm,
    resetPasswordSchema,
    handleResetPassword
  );

  if (user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
      >
        <HeaderPage
          title="password reset"
          subtitle="please enter the new password"
        />
        <PasswordForm
          title="reset-password"
          onSubmit={rest.onForgotPassword}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
          errors={value.errors}
          data={value.data}
          onInputChange={rest.handleChange}
        />
      </Box>
    </Box>
  );
};

export default EnterNewPassword;
