import React from "react";
import { Box } from "@mui/material";
import { object } from "prop-types";
import VacationImage from "./VacationImage";
import VacationHead from "./VacationHead";
import VacationBody from "./VacationBody";

const Vacation = ({ vacation }) => {
  return (
    <Box display="flex" justifyContent="space-between" height="50vh">
      <Box>
        <VacationImage image={vacation.image} />
      </Box>
      <Box>
        <VacationHead title={vacation.title} subtitle={vacation.subtitle} />{" "}
        <VacationBody description={vacation.description} />
      </Box>
    </Box>
  );
};

Vacation.propTypes = {
  vacation: object.isRequired,
};

export default Vacation;
