import React from "react";
import { node } from "prop-types";
import { Box } from "@mui/material";

const Main = ({ children }) => {
  return <Box>{children}</Box>;
};

Main.propTypes = {
  children: node.isRequired,
};
export default Main;
