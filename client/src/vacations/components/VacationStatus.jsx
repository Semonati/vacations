import React from "react";
import { arrayOf, bool, string, func } from "prop-types";
import ErrorAlert from "../../components/ErrorAlert";
import Spinner from "../../components/Spinner";
import { Typography } from "@mui/material";
import Vacations from "./Vacations";

const VacationStatus = ({ isPending, error, vacations}) => {
  if (isPending) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error} />;

  if (vacations && !vacations.length)
    return (
      <Typography>
        Oops... it seems there are no vacations to display
      </Typography>
    );
  if (vacations && !!vacations.length)
    return <Vacations vacations={vacations}  />;;
};

VacationStatus.propTypes = {
  isPending: bool.isRequired,
  error: string,
//   vacations: arrayOf(cardType),
};

export default VacationStatus;
