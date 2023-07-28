import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
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
    <Box m="0 5%">
      <Container sx={{ position: "relative", minHeight: "92vh" }}>
        <HeaderPage
          title="My Vacation"
          subtitle="All About My Vecations Stories"
        />
        <Button
          onClick={() => navigate(ROUTES.CREAT_VACATION)}
          size="small"
          color="secondary"
        >
          <AddCircleOutlineOutlinedIcon />
          <Typography variant="text">Add vacation</Typography>
        </Button>
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
