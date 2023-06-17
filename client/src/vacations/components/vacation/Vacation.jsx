import React from "react";
import { Box, Card } from "@mui/material";
import { object } from "prop-types";
import VacationImage from "./VacationImage";
import VacationHead from "./VacationHead";
import VacationBody from "./VacationBody";
import { getColor } from "../../../utils/colorModeInLocalStorage";

const Vacation = ({ vacation, onLike }) => {
  const colorMode = getColor();

  const cardColor = () => {
    return colorMode === "dark" ? "#2a2d64" : "#e0e0e0";
  };
  return (
    <Card sx={{ backgroundColor: cardColor }}>
      <Box>
        <VacationHead title={vacation.title} subtitle={vacation.subtitle} />
        <VacationBody vacation={vacation} onLike={onLike} />
      </Box>
      <Box>
        <VacationImage image={vacation.image} />
      </Box>
    </Card>
  );
};

Vacation.propTypes = {
  vacation: object.isRequired,
};

export default Vacation;
