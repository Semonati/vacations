import {
  Box,
  Paper,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import React from "react";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import { tokens } from "../../theme";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      square
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: colors.primary[400],
        width: "100%",
      }}
    >
      <Box display="flex" alignItems="center">
        <IconButton disabled>
          <CopyrightOutlinedIcon />
        </IconButton>
        <Typography
          color={colors.green[400]}
          fontWeight="bold"
        >
          Created By Natan Semo
        </Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
