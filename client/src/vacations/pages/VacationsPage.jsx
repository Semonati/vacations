import { Box } from "@mui/material";

import HeaderPage from "../../components/HeaderPage";
import { useEffect } from "react";
import useVacations from "../hooks/useVacations";
import VacationStatus from "../components/VacationStatus";

const VacationsPage = () => {
  const { value, handleGetVacations } = useVacations();
  const { isPending, error, filtered } = value;

  useEffect(() => {
    handleGetVacations();
  }, [handleGetVacations]);

  return (
    <Box m="0 5%">
      <HeaderPage
        title="View All Stories And Vacations"
        subtitle="Here you can see everyone's memories from tripe or vacation "
      />
      <VacationStatus
        isPending={isPending}
        error={error}
        vacations={filtered}
      />
    </Box>
  );
};

export default VacationsPage;
