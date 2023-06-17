import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const { userId } = useParams();
  const { user } = useUser();
  const { handleEditUser, handleGetUser, userValue } = useUsers();
  const { value, ...rest } = useForm(initialSignupForm, signupSchema, () => {
    handleEditUser(userValue.user._id, {
      ...normalizeUser({ ...value.data }),
      user_id: user._id,
    });
  });

  // email: user.email,
  // (initialSignupForm.email = user.email),
  const navigate = useNavigate();

  useEffect(() => {
    handleGetUser(userId).then((data) => {
      if (user._id !== data._id) return navigate(ROUTES.ROOT);
      const modeledUser = mapUserToModel(data);
      rest.setData(modeledUser);
    });
  }, []);

  return (
    <Box>
      <Box align="center">
        <HeaderPage
          title="Edit account"
          subtitle="please edit account to create youe own vacation story"
        />
        {/* <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar> */}
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
          onChange={rest.validateForm}
          errors={value.errors}
          data={value.data}
          onInputChange={rest.handleChange}
        />
      </Container>
    </Box>
  );
};

export default EditUserPage;
