import React from "react";
import { Avatar, Box, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Navigate } from "react-router-dom";

import HeaderPage from "../../components/HeaderPage";
import ROUTES from "../../router/routesModel";
import useForm from "../../forms/hooks/useForm";
import useUsers from "../hooks/useUsers";
import signupSchema from "../models/joi-schema/signupSchema";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import { useUser } from "../../providers/UserProviders";
import UserForm from "../components/UserForm";

const SigninPage = () => {
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
        <UserForm
          title="signup"
          onSubmit={() => rest.onSubmit("signup")}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
          errors={value.errors}
          data={value.data}
          onInputChange={rest.handleChange}
          setData={rest.setData}
        />        
      </Container>
    </Box>
  );
};

export default SigninPage;
