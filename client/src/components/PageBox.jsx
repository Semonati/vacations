import React from "react";
import { node } from "prop-types";
import { Box } from "@mui/material";

const PageBox = ({ children }) => {
  return (
    <Box minHeight="120vh" ml="2%">
      <Box>{children}</Box>
    </Box>
  );
};

PageBox.prototype = {
  children: node.isRequired,
};

export default PageBox;
