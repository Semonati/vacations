import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import HeaderPage from "../../components/HeaderPage";
import { useParams } from "react-router-dom";
import useVacations from "../hooks/useVacations";
import Spinner from "../../components/Spinner";
import ErrorAlert from "../../components/ErrorAlert";

const VacationsDetailsPage = () => {
  const { vacationId } = useParams();

  const { handleGetVacation, value } = useVacations();
  const { error, isLoading, vacation } = value;
  console.log(vacation);
  useEffect(() => {
    handleGetVacation(vacationId);
  }, []);
  return (
    <Box m="2%">
      <Container maxWidth="lg">
        <HeaderPage
          title="Vacations Details"
          subtitle="full details on the vacation"
        />
        {isLoading && <Spinner />}
        {error && <ErrorAlert errorMessage={error} />}

        <Typography
          variant="h1"
          align="center"
        >
          {vacation && vacation.title}
        </Typography>
        <Typography variant="h3" align="center">
          {vacation && vacation.subtitle}
        </Typography>
        <Typography variant="h4" align="center">
          {vacation && vacation.description}
        </Typography>
      </Container>
    </Box>
  );
};

export default VacationsDetailsPage;
