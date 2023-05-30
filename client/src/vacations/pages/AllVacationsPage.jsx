import { Box } from "@mui/material";
import HeaderPage from "../../components/HeaderPage";
import PageBox from "../../components/PageBox";
import { useEffect } from "react";
import useVacations from "../hooks/useVacations";
import VacationStatus from "../components/VacationStatus";

const AllVacationsPage = () => {
  const { value, handleGetVacations } = useVacations();
  const { isPending, vacations, error } = value;

  useEffect(() => {
    handleGetVacations();
  }, []);

  return (
    <PageBox>
      <Box>
        <HeaderPage
          title="View All Stories And Vacations"
          subtitle="Here you can see everyone's memories from tripe or vacation "
        />
        <VacationStatus
          isPending={isPending}
          error={error}
          vacations={vacations}
        />
      </Box>
    </PageBox>
  );
};

export default AllVacationsPage;
