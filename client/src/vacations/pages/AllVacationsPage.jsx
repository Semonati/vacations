import { Box, IconButton } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage";
import PageBox from "../../components/PageBox";
import { useEffect } from "react";
import useVacations from "../hooks/useVacations";
import VacationStatus from "../components/VacationStatus";
import ROUTES from "../../router/routesModel";

const AllVacationsPage = () => {
  const user = null;
  // const user = true;
  const navigate = useNavigate();
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
        {user && (
          <Box width="95%" display="flex" justifyContent="flex-end">
            <IconButton onClick={() => navigate(ROUTES.CREAT_VACTION)}>
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </PageBox>
  );
};

export default AllVacationsPage;
