import React from 'react'
import PropTypes from 'prop-types'
import Topbar from './topbar/Topbar'
import Footer from './footer/Footer'
import { Box } from '@mui/material'
import Main from './main/Main'

const Layout = ({children}) => {
  return (
    <Box width="100%" >
      <Topbar />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
}

Layout.propTypes = {}

export default Layout