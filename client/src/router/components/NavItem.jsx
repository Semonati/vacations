import React from "react";
import { string } from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import firstLetterUpperCase from "../../utils/firstLetterUpperCase";
import NavBarLink from "./NavBarLink";

const NavItem = ({ to, label, icon, setSelected, isCollapsed }) => {
  label = firstLetterUpperCase(label);
  return (
    <NavBarLink to={to}>
      <Button color="secondary" onClick={() => setSelected(label)}>
        {!isCollapsed && (
          <Box display="flex" justifyContent="space-between">
            <Box mr="1vw">{icon}</Box>
            <Typography>{label}</Typography>
          </Box>
        )}
        {isCollapsed && <Box> {icon}</Box>}
      </Button>
    </NavBarLink>
  );
};

NavItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
};

export default NavItem;
