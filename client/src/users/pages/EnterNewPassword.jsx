import React from "react";
import HeaderPage from "../../components/HeaderPage";
import { Box } from "@mui/material";
import PasswordForm from "../components/PasswordForm";
import { useUser } from "../../providers/UserProviders";
import useForgotPassword from "../hooks/useForgotPassword";
import useForm from "../../forms/hooks/useForm";
import initialResetPasswordForm from "../helpers/initialForms/initialResetPasswordForm";
import resetPasswordSchema from "../models/joi-schema/resetPasswordSchema";

const EnterNewPassword = () => {
  const { user } = useUser();
  const { handleResetPassword } = useForgotPassword();
  const { value, ...rest } = useForm(
    initialResetPasswordForm,
    resetPasswordSchema,
    handleResetPassword
  );
  
  return (
    <Box>
      <Box align="center">
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
