import React from "react";
import { Box, Menu, MenuItem, useTheme } from "@mui/material";
import { useUser } from "../../../providers/UserProviders";
import useUsers from "../../../users/hooks/useUsers";
import ROUTES from "../../../router/routesModel";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../../theme";

const TopMenu = ({ isOpen, anchorEl, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <Menu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        {!user && (
          <>
            <MenuItem
              onClick={() => {
                navigate(ROUTES.LOGIN);
              }}
            >
              Login
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate(ROUTES.SIGNUP);
              }}
            >
              Signup
            </MenuItem>
          </>
        )}
        {user && (
          <>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
      </Box>
    </Menu>
  );
};

export default TopMenu;
