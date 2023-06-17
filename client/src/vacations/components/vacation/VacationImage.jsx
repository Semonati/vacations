import React from "react";
import { object } from "prop-types";
import { Box, CardMedia } from "@mui/material";

const VacationImage = ({ image }) => {
  return (
    <Box xs={10}>
      <CardMedia
        component="img"
        height="300"
        image={image.url}
        alt={image.alt}
      />
    </Box>
  );
};

VacationImage.propTypes = {
  image: object.isRequired,
};

export default VacationImage;
