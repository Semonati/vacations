import React from "react";
import { string, func } from "prop-types";
import NavBarLink from "../../../router/components/NavBarLink";
import { Box, MenuList } from "@mui/material";
import firstLetterUpperCase from "../../../utils/firstLetterUpperCase";

const NavMenu = ({ text, to, onClick }) => {
  return (
    <Box>
      <NavBarLink to={to}>
        <MenuList onClick={onClick} sx={{ color: "red", width:"100%" }}>
          {firstLetterUpperCase(text)}
        </MenuList>
      </NavBarLink>
    </Box>
  );
};

NavMenu.propTypes = {
  to: string.isRequired,
  text: string.isRequired,
  onClick: func.isRequired,
};

export default NavMenu;
