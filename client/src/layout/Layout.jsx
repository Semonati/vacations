import React from "react";
import { node } from "prop-types";
import Topbar from "./topbar/Topbar";
import Footer from "./footer/Footer";
import { Box } from "@mui/material";
import Main from "./main/Main";

const Layout = ({ children }) => {
  return (
    <Box width="100%" ml="1%">
      <Topbar />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
