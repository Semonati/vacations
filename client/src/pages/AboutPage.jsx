import React from 'react'
import HeaderPage from '../components/HeaderPage';
import { Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Box m="2%">
      <HeaderPage
        title="About The Site"
        subtitle="Here You Can Find All The Info About The Site"
      />
    </Box>
  );
}

export default AboutPage