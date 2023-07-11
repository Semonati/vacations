import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Container, IconButton } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import HeaderPage from "../../components/HeaderPage";
import ROUTES from "../../router/routesModel";
import useVacations from "../hooks/useVacations";
import { useUser } from "../../providers/UserProviders";
import VacationStatus from "../components/VacationStatus";

const MyVacationsPage = () => {
  const { handleGetMyVacations, value } = useVacations();
  const { isPending, vacations, error } = value;
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetMyVacations();
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Box m="2%">
      <Container sx={{ position: "relative", minHeight: "92vh" }}>
        <HeaderPage
          title="My Vacation"
          subtitle="All About My Vecations Stories"
        />
        <IconButton onClick={() => navigate(ROUTES.CREAT_VACATION)} sx={{mb:"2%"}} size="large">
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
        <VacationStatus
          isPending={isPending}
          error={error}
          vacations={vacations}
        />
      </Container>
    </Box>
  );
};

export default MyVacationsPage;
