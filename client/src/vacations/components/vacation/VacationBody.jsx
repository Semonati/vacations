import React from "react";
import { string } from "prop-types";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const VacationBody = ({ description }) => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="h5"
      >
        {description}
      </Typography>
    </Box>
  );
};

VacationBody.propTypes = {
  description:string.isRequired
};

export default VacationBody;
