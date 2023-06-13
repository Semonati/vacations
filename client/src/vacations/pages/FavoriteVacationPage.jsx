import React, { useCallback, useEffect } from "react";
import HeaderPage from "../../components/HeaderPage";
import { Box } from "@mui/material";
import useVacations from "../hooks/useVacations";
import VacationStatus from "../components/VacationStatus";

const FavoriteVacationPage = () => {
  const { value, ...rest } = useVacations();
  const { isPending, error, vacations } = value;
  const { handleGetFavVacations } = rest;
// console.log(value);
  useEffect(() => {
    handleGetFavVacations();
  }, []);

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavVacations();
  }, []);

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
