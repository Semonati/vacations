import React from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import { useUser } from "../../../providers/UserProviders";
import useUsers from "../../../users/hooks/useUsers";
import ROUTES from "../../../router/routesModel";
import { useNavigate } from "react-router-dom";

const TopMenu = ({ isOpen, anchorEl, onClose }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };
  const onLogin = () => {
    navigate(ROUTES.LOGIN);
    onClose();
  };
  const onSignup = () => {
    navigate(ROUTES.SIGNUP);
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
            <MenuItem onClick={onLogin}>Login</MenuItem>

            <MenuItem
              onClick={onSignup}
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
