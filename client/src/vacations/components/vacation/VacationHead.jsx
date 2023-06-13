import React from "react";
import { string } from "prop-types";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import firstLetterUpperCase from "../../../utils/firstLetterUpperCase";

const VacationHead = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box>
        <Typography
          variant="h2"
          color={colors.blue[300]}
          align="center"
        >
          {firstLetterUpperCase(title)}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h3" color={colors.blue[300]} align="center">
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
