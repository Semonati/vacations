import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { node } from "prop-types";
import TopMenu from "../layout/topbar/menu/TopMenu";

const MenuContext = React.createContext(null);

export const MenuProvider = ({ children }) => {
  const theme = useTheme()
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));
  const [isOpen, setIsOpen] = useState();
  const [anchorEl, setAnchorEl] = useState();
  const anchorRef = useRef();

  useEffect(() => {
    setAnchorEl(anchorRef.current);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [screenSize]);
  // console.log(isOpen);

  return (
    <>
      <MenuContext.Provider value={setIsOpen}>{children}</MenuContext.Provider>
      <Box
        ref={anchorRef}
        position="fixed"
        top="9%"
        right="4%"
        width="100%"
      ></Box>
      {anchorEl && (
        <TopMenu
          anchorEl={anchorEl}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within a NameProvider");
  return context;
};

MenuProvider.propTypes = {
  children: node.isRequired,
};
