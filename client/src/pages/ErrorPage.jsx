import React from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import ROUTES from "../router/routesModel";
import { tokens } from "../theme";

const ErrorPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderPage title="Error 404" subtitle="Page not found" />

      <Box display="flex" flexDirection="column">
        <Box xs={12} md={8}>
          <Typography variant="h4">
            Oops... The requested URL was not found on this server
          </Typography>
          <Button
            variant="text"
            sx={{ color: colors.gray[100] }}
            onClick={() => navigate(ROUTES.ROOT)}
          >
            Click here to return to the home page...
          </Button>
        </Box>
        <Box xs={12} md={4} justifyContent="center">
          <img
            width="100%"
            src="/assets/images/broken-robot.png"
            alt="broken robot"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorPage;
