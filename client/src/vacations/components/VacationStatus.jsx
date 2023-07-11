import React from "react";
import { arrayOf, bool, string } from "prop-types";
import { Typography } from "@mui/material";

import ErrorAlert from "../../components/ErrorAlert";
import Spinner from "../../components/Spinner";
import vacationType from "../models/types/vacationType";
import { useNotification } from "../../providers/NotificationProvider";
import FilteringDialog from "../../components/FilteringDialog";

const VacationStatus = ({ isPending, error, vacations, onLike }) => {
  const { socket } = useNotification();
  if (isPending) return <Spinner color="secondary" />;
  if (error) return <ErrorAlert errorMessage={error} />;

  if (vacations && !vacations.length)
    return (
      <Typography>
        Oops... it seems there are no vacations to display
      </Typography>
    );
  if (vacations && !!vacations.length)
    return (
      <FilteringDialog vacations={vacations} onLike={onLike} socket={socket} />
    );
};

VacationStatus.propTypes = {
  isPending: bool.isRequired,
  error: string,
  vacations: arrayOf(vacationType),
};

export default VacationStatus;
