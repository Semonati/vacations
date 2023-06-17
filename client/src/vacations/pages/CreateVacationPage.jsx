import React from "react";
import { Box, Container } from "@mui/material";

import HeaderPage from "../../components/HeaderPage";
import { useUser } from "../../providers/UserProviders";
import useForm from "../../forms/hooks/useForm";
import useVacations from "../hooks/useVacations";
import initialVacationForm from "../helpers/initialForms/initialVacationForm";
import { createVacationSchema } from "../models/joi-schema/createVacationSchema";
import VacationsForm from "../components/VacationsForm";
import { Navigate } from "react-router-dom";
import ROUTES from "../../router/routesModel";

const CreateVacationPage = () => {
  const { user } = useUser();
  const { handleCreateVacation } = useVacations();
  const { value, ...rest } = useForm(
    initialVacationForm,
    createVacationSchema,
    handleCreateVacation
  );
  
  value.data.creatorName = `${user.name.first} ${user.name.last}`;

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Box m="2%">
      <HeaderPage
        title="Create Vacation"
        subtitle="create your story vacation"
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <VacationsForm
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={value.errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={value.data}
          setData={rest.setData}
        />
      </Container>
    </Box>
  );
};

export default CreateVacationPage;
