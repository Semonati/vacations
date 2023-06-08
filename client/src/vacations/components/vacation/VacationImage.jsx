import React from "react";
import { object } from "prop-types";
import { CardMedia } from "@mui/material";

const VacationImage = ({ image }) => {
  return (
    <CardMedia component="img" height="300" image={image.url} alt={image.alt} />
  );
};

VacationImage.propTypes = {
  image: object.isRequired,
};

export default VacationImage;
