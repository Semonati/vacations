import React from "react";
import HeaderPage from "../components/HeaderPage";
import { Container, Grid, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <HeaderPage
        title="About The Site"
        subtitle="Here You Can Find All The Info About The Site"
      />
      <Grid container justifyContent="center" align="center">
        <Grid item xs={12} md={6}>
          <img
            src="assets/images/vacation-story.png"
            alt="vacation"
            width="380"
          />
        </Grid>
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
          <Typography variant="h6" component="p" mb="2%">
            Welcome to my vacations stories app! my goal is to share a vacations
            stories with the world, and hear some other recommended vacations
            stories that others have experienced.
          </Typography>
          <Typography variant="h6" component="p" mb="2%">
            My app makes it easy for you to create vacation cards that showcase
            the experiences, stories, and recommendations for anyone looking for
            travel destination information.
          </Typography>
          <Typography variant="h6" component="p" mb="2%">
            Thank you for choosing my vacation story app. I hope you decide to
            use it and share your experience. The app will help you get to know
            and share vacations in the best possible way. One last thing, go on
            vacation and tell me how it was!
          </Typography>
        </Grid>
      </Grid>

    </Container>
  );
};

export default AboutPage;
