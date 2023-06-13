import { object } from "prop-types";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ROUTES from "../../../router/routesModel";
import { tokens } from "../../../theme";
import { useUser } from "../../../providers/UserProviders";
import { useState } from "react";
import useVacations from "../../hooks/useVacations";
import VacationDeleteAlert from "./VacationDeleteAlert";

const VacationBody = ({ vacation }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isDialogOpen, setDialog] = useState(false);
  const [isLike, setLike] = useState(() => {
    if (!user) return false;
    return !!vacation.likes.find((id) => id === user._id);
  });
  const { handleLikeVacation, handleGetFavVacations } = useVacations();

  const handleLike = async () => {
    setLike((prev) => !prev);
    await handleLikeVacation(vacation._id);
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
        {`${vacation.description.substring(0, 50)}...`}
      </Typography>
      <Box display="flex" justifyContent="space-around">
        <Button
          onClick={() => navigate(`${ROUTES.VACATION_DETAILS}/${vacation._id}`)}
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

          {user && user._id === vacation.user_id && (
            <IconButton
              onClick={() =>
                navigate(`${ROUTES.EDIT_VACATION}/${vacation._id}`)
              }
            >
              <EditOutlinedIcon />
            </IconButton>
          )}

          {user && (user.isAdmin || user._id === vacation.user_id) && (
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Box>
      <VacationDeleteAlert
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        vacationId={vacation._id}
      />
    </Box>
  );
};

VacationBody.propTypes = {
  vacation: object.isRequired,
};

export default VacationBody;
