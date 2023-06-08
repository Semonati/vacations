import React from "react";
import HeaderPage from "../components/HeaderPage";
import { Box } from "@mui/material";

const ContactPage = (props) => {
  return (
    <Box m="2%">
      <HeaderPage title="Contact us" subtitle="Here you can contact us" />
    </Box>
  );
};

ContactPage.propTypes = {
  
};

export default ContactPage;
