import React from "react";
import {string} from "prop-types";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const VacationHead = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box>
        <Typography >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

VacationHead.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
};

export default VacationHead;
