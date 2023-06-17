import { bool, func, string } from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useVacations from "../hooks/useVacations";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../router/routesModel";

const PopupAlert = ({
  isDialogOpen,
  onChangeDialog,
  vacationId,
  message,
  user,
}) => {
  const { handleDeleteVacation } = useVacations();
  const navigate = useNavigate();

  const onAlert = () => {
    if(user){
      handleDeleteVacation(vacationId);
      return navigate(ROUTES.ROOT);
    }
    navigate(`${ROUTES.LOGIN}`);
  };
  return (
    <Dialog
      open={isDialogOpen}
      onClose={onChangeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {user && "Are you sure you want to delete this vacation?"}
        {!user && "You're not login yet."}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onChangeDialog} color="error">
          cancel
        </Button>
        <Button onClick={onAlert} autoFocus color="info">
          {user ? "Delete vacation" : "login"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

PopupAlert.propTypes = {
  isDialogOpen: bool.isRequired,
  onChangeDialog: func.isRequired,
  message: string.isRequired,
};

export default PopupAlert;
