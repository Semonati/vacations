import React, { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Container, Box } from "@mui/material";

import HeaderPage from '../../components/HeaderPage';
import useForm from '../../forms/hooks/useForm';
import initialVacationForm from '../helpers/initialForms/initialVacationForm';
import { createVacationSchema } from '../models/joi-schema/createVacationSchema';
import normalizaeVacation from '../helpers/normalization/normalizaeVacation';
import useVacations from '../hooks/useVacations';
import { useUser } from '../../providers/UserProviders';
import ROUTES from '../../router/routesModel';
import mapVacationToModel from '../helpers/normalization/mapToModel';
import VacationsForm from '../components/VacationsForm';


const EditVacationPage = () => {
    const { vacationId } = useParams();
    const { value, ...rest } = useForm(
      initialVacationForm,
      createVacationSchema,
      () => {
        handleUpdateVacation(vacation._id, {
          ...normalizaeVacation({ ...value.data }),
          user_id: user._id,
        });
      }
    );

      const {
        handleUpdateVacation,
        handleGetVacation,
        value: { vacation },
      } = useVacations();

      const { user } = useUser();
      const navigate = useNavigate();
      
      useEffect(() => {
        handleGetVacation(vacationId).then((data) => {
          if (user._id !== data.user_id) return navigate(ROUTES.ROOT);
          const modeledstore = mapVacationToModel(data);
          rest.setData(modeledstore);
        });
      }, []);

      if (!user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Box ml="2%">
      <HeaderPage title="Edit Vacation" subtitle="update your story vacation" />
      <Container
        sx={{
          paddingTop: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <VacationsForm
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={value.errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={value.data}
        />
      </Container>
    </Box>
  );
}

export default EditVacationPage