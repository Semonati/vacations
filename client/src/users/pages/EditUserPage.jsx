import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";

import mapUserToModel from "../helpers/normalization/mapToModelUser";
import ROUTES from "../../router/routesModel";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import UserForm from "../components/UserForm";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useUser } from "../../providers/UserProviders";
import HeaderPage from "../../components/HeaderPage";

const EditUserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { user } = useUser();
  const { handleEditUser, handleGetUser, userValue } = useUsers();
  const { value, ...rest } = useForm(initialSignupForm, signupSchema, () => {
    handleEditUser(userValue.user._id, {
      ...normalizeUser({ ...value.data }),
      user_id: user._id,
    });
  });
  

  useEffect(() => {
    handleGetUser(userId).then((data) => {
      if (user._id !== data._id) return navigate(ROUTES.ROOT);
      const modeledUser = mapUserToModel(data);
      rest.setData(modeledUser);
    });
  }, []);

  if(!user) return <Navigate replace to={ROUTES.LOGIN} />

  return (
    <Box>
      <Box>
        <HeaderPage
          title="Edit account"
          subtitle="edit account to create youe own vacation story"
        />
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
          title="edit"
          onSubmit={() => rest.onSubmit("edit")}
          onReset={rest.handleReset}
          onChange={() => rest.validateForm("edit")}
          errors={value.errors}
          data={value.data}
          onInputChange={rest.handleChange}
        />
      </Container>
    </Box>
  );
};

export default EditUserPage;
