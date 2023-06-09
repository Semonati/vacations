import { bool, func } from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useVacations from "../../hooks/useVacations";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../router/routesModel";

const VacationDeleteAlert = ({
  isDialogOpen,
  onChangeDialog,
  vacationId,
}) => {
  const { handleDeleteVacation } = useVacations();
  const navigate = useNavigate()

  const onDelete =()=>{
    handleDeleteVacation(vacationId);
    navigate(ROUTES.ROOT)
  }
  return (
    <Dialog
      open={isDialogOpen}
      onClose={onChangeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete this vacation?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This operation will completely delete the vacation story and all its
          data from the database and it will not be possible to retrieve the
          story afterwards
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onChangeDialog} color="error">
          cancel
        </Button>
        <Button
          onClick={onDelete}
          autoFocus
          color="info"
        >
          Delete vacation
        </Button>
      </DialogActions>
    </Dialog>
  );
};

VacationDeleteAlert.propTypes = {
  isDialogOpen: bool.isRequired,
  onChangeDialog: func.isRequired,
};

export default VacationDeleteAlert;
