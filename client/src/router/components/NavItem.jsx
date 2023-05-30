import React from "react";
import { string } from "prop-types";
import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import firstLetterUpperCase from "../../utils/firstLetterUpperCase";

const NavItem = ({ to, label, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  label = firstLetterUpperCase(label);
  return (
    <MenuItem
      active={selected === label}
      style={{
        color: colors.gray[100],
      }}
      onClick={() => setSelected(label)}
      icon={icon}
    >
      <Typography color={colors.blue[300]}>{label}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

NavItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
};

export default NavItem;
