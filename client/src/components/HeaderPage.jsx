import React from "react";
import { string } from "prop-types";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import firstLetterUpperCase from "../utils/firstLetterUpperCase";

const HeaderPage = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  title = firstLetterUpperCase(title);
  subtitle = firstLetterUpperCase(subtitle);
  return (
    <Box mb="2%">
      <Typography
        variant="h1"
        color={colors.green[500]}
        fontWeight="bold"
        sx={{ mb: "1%" }}
      >
        {title}
      </Typography>
      <Typography variant="h3" color={colors.blue[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

HeaderPage.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
};

export default HeaderPage;
