import React from "react";
import PageBox from "../../components/PageBox";
import HeaderPage from "../../components/HeaderPage";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Navigate } from "react-router-dom";
import { getColor } from "../../utils/colorModeInLocalStorage";
import NavBarLink from "../../router/components/NavBarLink";
import ROUTES from "../../router/routesModel";
import { tokens } from "../../theme";

const SigninPage = () => {
  const colorMode = getColor();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const user = true;
  const user = null;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <PageBox>
      <HeaderPage
        title="Signup"
        subtitle="please login to create youe own vacation story"
      />
      <Box align="center">
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    color={colorMode === "dark" ? "secondary" : undefined}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    color={colorMode === "dark" ? "secondary" : undefined}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    color={colorMode === "dark" ? "secondary" : undefined}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    color={colorMode === "dark" ? "secondary" : undefined}
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <NavBarLink to={ROUTES.LOGIN}>
                    <Typography sx={{ color: colors.primary[300] }}>
                      Already have an account? Sign in
                    </Typography>
                  </NavBarLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </PageBox>
  );
};

export default SigninPage;
