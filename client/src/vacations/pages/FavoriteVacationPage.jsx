import React, { useCallback, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import HeaderPage from "../../components/HeaderPage";
import useVacations from "../hooks/useVacations";
import VacationStatus from "../components/VacationStatus";
import { useUser } from "../../providers/UserProviders";
import ROUTES from "../../router/routesModel";

const FavoriteVacationPage = () => {
    const { user } = useUser();
  const { value, handleGetFavVacations } = useVacations();
  const { isPending, error, vacations } = value;

  useEffect(() => {
    handleGetFavVacations();
  }, []);

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavVacations();
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Box m="2%">
      <HeaderPage
        title="favorite vacation"
        subtitle="all my favorite vacation"
      />
      <VacationStatus
        isPending={isPending}
        error={error}
        vacations={vacations}
        onLike={changeLikeStatus}
      />
    </Box>
  );
};

export default FavoriteVacationPage;
