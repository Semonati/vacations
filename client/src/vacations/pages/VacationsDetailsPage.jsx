import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FormatIndentIncreaseOutlinedIcon from "@mui/icons-material/FormatIndentIncreaseOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import HeaderPage from "../../components/HeaderPage";
import useVacations from "../hooks/useVacations";
import Spinner from "../../components/Spinner";
import ErrorAlert from "../../components/ErrorAlert";
import { getColor } from "../../utils/colorModeInLocalStorage";
import { useUser } from "../../providers/UserProviders";
import ROUTES from "../../router/routesModel";
import firstLetterUpperCase from "../../utils/firstLetterUpperCase";

const VacationsDetailsPage = () => {
  const { user } = useUser();
  const { vacationId } = useParams();
  const navigate = useNavigate();
  const { handleDeleteVacation, handleGetVacation, value } = useVacations();
  const { error, isLoading, vacation } = value;
  const colorMode = getColor();
  const cardColor = () => {
    return colorMode === "dark" ? "#2a2d64" : "#e0e0e0";
  };
  const onDelete = (vacationId) => {
    handleDeleteVacation(vacationId);
    navigate(ROUTES.ROOT);
  };

  useEffect(() => {
    handleGetVacation(vacationId);
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Box m="0 5%">
      <Container maxWidth="lg">
        <HeaderPage
          title="Vacations Details"
          subtitle="full details on the vacation"
        />
        <Card
          sx={{
            p: 2,
            backgroundColor: cardColor,
            m: "5% 0 10% 0",
          }}
        >
          {isLoading && <Spinner />}
          {error && <ErrorAlert errorMessage={error} />}

          <Typography align="center" variant="h1">
            {vacation && vacation.title}
          </Typography>
          <Typography align="center" variant="h3">
            {vacation && vacation.subtitle}
          </Typography>

          <Typography
            align="center"
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "2%",
            }}
            gutterBottom
          >
            <Box display="flex" justifyContent="center" p="0 10%">
              {vacation && vacation.description}
            </Box>
          </Typography>

          <Grid container display="flex" justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
                color="secondary"
              >
                <IconButton
                  size="small"
                  onClick={() => navigate(`${ROUTES.USER_PROFILE}/${user._id}`)}
                >
                  <FormatIndentIncreaseOutlinedIcon />
                </IconButton>
                Creator:{" "}
                {vacation && firstLetterUpperCase(vacation.creatorName)}
              </Typography>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
                color="secondary"
              >
                <IconButton size="small">
                  <LocationOnOutlinedIcon />
                </IconButton>
                Location:{" "}
                {vacation &&
                  `${vacation.address.country} ${vacation.address.city} ${
                    vacation.address.street
                  }  ${
                    vacation.address.houseNumber !== 0
                      ? vacation.address.houseNumber
                      : ""
                  }`}
              </Typography>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
                color="secondary"
              >
                <IconButton size="small">
                  <MonetizationOnOutlinedIcon />
                </IconButton>
                vacation price:{" "}
                {vacation && vacation.price ? vacation.price : 0}
              </Typography>
            </Grid>
            <Grid
              item
              display="flex"
              alignItems="flex-end"
              justifyContent="flex-start"
            >
              <Typography>
                {user && vacation && user._id === vacation.user_id && (
                  <IconButton
                    onClick={() =>
                      navigate(`${ROUTES.EDIT_VACATION}/${vacation._id}`)
                    }
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                )}
              </Typography>

              <Typography>
                {user &&
                  vacation &&
                  (user.isAdmin || user._id === vacation.user_id) && (
                    <>
                      <IconButton
                        aria-label="delete card"
                        onClick={() => onDelete(vacation._id)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </>
                  )}
              </Typography>
            </Grid>
          </Grid>

          {vacation && (
            <CardMedia
              component="img"
              image={vacation.image.url}
              alt={vacation.image.alt}
              sx={{ mt: "2%" }}
            />
          )}
        </Card>
      </Container>
    </Box>
  );
};

export default VacationsDetailsPage;

/*
   <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IconButton
                  size="small"
                  onClick={() => navigate(`${ROUTES.USER_PROFILE}/${user._id}`)}
                >
                  <FormatIndentIncreaseOutlinedIcon />
                </IconButton>
                Creator:{" "}
                {vacation && firstLetterUpperCase(vacation.creatorName)}
              </Typography>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IconButton size="small">
                  <LocationOnOutlinedIcon />
                </IconButton>
                Location:{" "}
                {vacation &&
                  `${vacation.address.country} ${vacation.address.city} ${
                    vacation.address.street
                  }  ${
                    vacation.address.houseNumber !== 0
                      ? vacation.address.houseNumber
                      : ""
                  }`}
              </Typography>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IconButton size="small">
                  <MonetizationOnOutlinedIcon />
                </IconButton>
                vacation price:{" "}
                {vacation && vacation.price ? vacation.price : 0}
              </Typography>
            </Box>
            <Box display="flex" alignItems="flex-end">
              <Typography>
                {user && vacation && user._id === vacation.user_id && (
                  <IconButton
                    onClick={() =>
                      navigate(`${ROUTES.EDIT_VACATION}/${vacation._id}`)
                    }
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                )}
              </Typography>

              <Typography>
                {user &&
                  vacation &&
                  (user.isAdmin || user._id === vacation.user_id) && (
                    <>
                      <IconButton
                        aria-label="delete card"
                        onClick={() => onDelete(vacation._id)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </>
                  )}
              </Typography>
            </Box>
          </Box>
*/
