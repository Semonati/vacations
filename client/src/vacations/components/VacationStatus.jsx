import React from "react";
import { arrayOf, bool, string } from "prop-types";
import { Typography } from "@mui/material";
import ErrorAlert from "../../components/ErrorAlert";
import Spinner from "../../components/Spinner";
import Vacations from "./Vacations";
import vacationType from "../models/types/vacationType";

const VacationStatus = ({ isPending, error, vacations, onLike }) => {
  if (isPending) return <Spinner color="secondary" />;
  if (error) return <ErrorAlert errorMessage={error} />;

  if (vacations && !vacations.length)
    return (
      <Typography>
        Oops... it seems there are no vacations to display
      </Typography>
    );
  if (vacations && !!vacations.length)
    return <Vacations vacations={vacations} onLike={onLike} />;
};

VacationStatus.propTypes = {
  isPending: bool.isRequired,
  error: string,
  vacations: arrayOf(vacationType),
};

export default VacationStatus;
