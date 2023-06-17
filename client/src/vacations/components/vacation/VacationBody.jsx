import { useState } from "react";
import { object } from "prop-types";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ROUTES from "../../../router/routesModel";
import { tokens } from "../../../theme";
import { useUser } from "../../../providers/UserProviders";
import useVacations from "../../hooks/useVacations";
import VacationDeleteAlert from "../PopupAlert";
import firstLetterUpperCase from "../../../utils/firstLetterUpperCase";

const alertReason = {
  deleteMessage:
    "This operation will completely delete the vacation story and all its data from the database and it will not be possible to retrieve the story afterwards",
  notLoggedMessage:
    "You need to login for you be able to read the full port about this vacation vacation.",
};
const VacationBody = ({ vacation, onLike = () => {} }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isDialogOpen, setDialog] = useState(false);
  const [message, setMessage] = useState("");
  const [likeCounter, setLikeCounter] = useState(vacation.likes.length);
  const { handleLikeVacation } = useVacations();
  const [isLike, setLike] = useState(() => {
    if (!user) return false;
    return !!vacation.likes.find((id) => id === user._id);
  });
  
  const handleLike = async () => {
    setLike((prev) => !prev);
    await handleLikeVacation(vacation._id);
    onLike();
    changeLikeValue(isLike);
  };

  const changeLikeValue = (value) => {
    if (value) return setLikeCounter((likeCounter) => likeCounter - 1);
    return setLikeCounter((likeCounter) => likeCounter + 1);
  };

  const onAlert = (trim, reason) => {
    setDialog(true);
    if (trim === "open") {
      if (reason === "login") {
        return setMessage(alertReason.notLoggedMessage);
      }
      if (reason === "delete") {
        return setMessage(alertReason.deleteMessage);
      }
    }
    setDialog(false);
  };

  return (
    <Box>
      {/* DESCRIPTION */}
      <Typography
        variant="h5"
        color={colors.gray[200]}
        align="center"
        p="1% 3%"
      >
        {firstLetterUpperCase(`${vacation.description.substring(0, 90)} ...`)}
      </Typography>

      <Box display="flex" justifyContent={user ? "space-around" : "center"}>
        {/* VACATION DETAILS */}
        {!user && (
          <IconButton
            onClick={() => onAlert("open", "login")}
            sx={{ color: colors.gray[100] }}
          >
            <Typography variant="h5">tell me mor</Typography>
            <ExpandMoreOutlinedIcon />
          </IconButton>
        )}
        {user && (
          <IconButton
            onClick={() =>
              navigate(`${ROUTES.VACATION_DETAILS}/${vacation._id}`)
            }
            sx={{ color: colors.gray[100] }}
          >
            <Typography variant="h5">tell me mor</Typography>
            <ExpandMoreOutlinedIcon />
          </IconButton>
        )}

        <Box>
          {/* LIKE VACATION */}
          {user && (
            <IconButton aria-label="add to favorites" onClick={handleLike}>
              <FavoriteBorderOutlinedIcon
                color={isLike ? "error" : "inherit"}
              />
              <Typography>{likeCounter}</Typography>
            </IconButton>
          )}
          {/* EDIT VACATION */}
          {user && user._id === vacation.user_id && (
            <IconButton
              onClick={() =>
                navigate(`${ROUTES.EDIT_VACATION}/${vacation._id}`)
              }
            >
              <EditOutlinedIcon />
            </IconButton>
          )}
          {/* DELETE VACATION */}
          {user && (user.isAdmin || user._id === vacation.user_id) && (
            <>
              <IconButton
                aria-label="delete card"
                onClick={() => onAlert("open", "delete")}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </>
          )}
        </Box>
        
      </Box>
      <VacationDeleteAlert
        isDialogOpen={isDialogOpen}
        onChangeDialog={onAlert}
        vacationId={vacation._id}
        message={message}
        user={user}
      />
    </Box>
  );
};

VacationBody.propTypes = {
  vacation: object.isRequired,
};

export default VacationBody;
