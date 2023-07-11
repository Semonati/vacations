import React from "react";
import HeaderPage from "../components/HeaderPage";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const AboutPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="2%" mb="5%">
      <HeaderPage
        title="About The Site"
        subtitle="Here You Can Find All The Info About The Site"
      />
      <Grid container display="flex" justifyContent="space-evenly">
        <Grid
          item
          xs={11}
          md={5}
          alignSelf="top"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" component="p" mb="2%">
            Welcome to my vacations stories app! my goal is to share a vacations
            stories with the world, and hear some other recommended vacations
            stories that others have experienced.
          </Typography>
          <Typography variant="h5" component="p" mb="2%">
            A little about me. My name is Natan Samo and I built this app
            because I wanted to share my vacations and I didn't know how and
            where to do it. As a system developer I decided to create a system
            that gathers experiences and stories from all over the world.
          </Typography>
          <Typography variant="h5" component="p" mb="2%">
            My app makes it easy for you to create vacation cards that showcase
            the experiences, stories, and recommendations for anyone looking for
            travel destination information.
          </Typography>
          <Typography variant="h5" component="p" mb="2%">
            Thank you for choosing my vacation story app. I hope you decide to
            use it and share your experience. The app will help you get to know
            and share vacations in the best possible way. One last thing, go on
            vacation and tell me how it was!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="assets/images/vacation-story.png"
            alt="vacation"
            width="450"
          />
        </Grid>
      </Grid>

          <Box align="center" mt="2% 0">
            <Typography variant="h2" color={colors.blue[300]}>
              How to use this app ?
            </Typography>
          </Box>
      <Grid container width="100%">
        fdvxf
      </Grid>
    </Box>
  );
};

export default AboutPage;
