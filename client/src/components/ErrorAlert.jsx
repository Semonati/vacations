import React from 'react'
import { string } from 'prop-types'
import { Container, Grid, Typography } from '@mui/material';

const ErrorAlert = ({errorMessage}) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="initial">
            Oops... something went wrong: {errorMessage}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center">
          <img
            width="100%"
            src="/assets/images/broken-robot-error.png"
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

ErrorAlert.propTypes = {
  errorMessage: string.isRequired,
};

export default ErrorAlert