import { string } from "prop-types";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EditOffOutlinedIcon from "@mui/icons-material/EditOffOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ROUTES from "../../../router/routesModel";
import { tokens } from "../../../theme";
import { useUser } from "../../../providers/UserProviders";
import { useState } from "react";
import useVacations from "../../hooks/useVacations";
import VacationDeleteAlert from "./VacationDeleteAlert";

const VacationBody = ({ description, vacationId, vacationLikes }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isDialogOpen, setDialog] = useState(false);
  const [isLike, setLike] = useState(() => {
    if (!user) return false;
    return !!vacationLikes.find((id) => id === user._id);
  });
  const { handleLikeVacation, handleGetFavVacations } = useVacations();

  const handleLike = async () => {
    setLike((prev) => !prev);
    await handleLikeVacation(vacationId);
    handleGetFavVacations();
  };
  const handleDialog = (trim) => {
    if (trim === "open") return setDialog(true);
    setDialog(false);
  };

  return (
    <Box>
      <Typography
        variant="h5"
        color={colors.red[500]}
        fontWeight="bold"
        align="center"
      >
        {`${description.substring(0, 200)}`}
      </Typography>
      <Box display="flex" justifyContent="space-around">
        <Button
          onClick={() => navigate(`${ROUTES.VACATION_DETAILS}`)}
          sx={{ color: colors.green[500] }}
        >
          <Typography>tell me mor</Typography>
        </Button>
        <Box>
          {user && (
            <IconButton aria-label="add to favorites" onClick={handleLike}>
              <FavoriteBorderOutlinedIcon
                color={isLike ? "error" : "inherit"}
              />
            </IconButton>
          )}

          {user ? (
            <IconButton
              onClick={() => navigate(`${ROUTES.EDIT_VACATION}/${vacationId}`)}
            >
              <EditOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton disabled={true}>
              <EditOffOutlinedIcon />
            </IconButton>
          )}

          <IconButton
            aria-label="delete card"
            onClick={() => handleDialog("open")}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <VacationDeleteAlert
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        vacationId={vacationId}
      />
    </Box>
  );
};

VacationBody.propTypes = {
  description: string.isRequired,
};

export default VacationBody;
