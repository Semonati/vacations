import React from "react";
import { object } from "prop-types";
import { Box } from "@mui/material";

const VacationImage = ({ image }) => {
  return (
    <Box>
      <img alt={image.alt} src={image.url} width="200%" />
    </Box>
  );
};

VacationImage.propTypes = {
  image: object.isRequired,
};

export default VacationImage;
