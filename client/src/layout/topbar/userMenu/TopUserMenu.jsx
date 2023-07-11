import React from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import { useUser } from "../../../providers/UserProviders";
import useUsers from "../../../users/hooks/useUsers";
import ROUTES from "../../../router/routesModel";
import { useNavigate } from "react-router-dom";

const TopUserMenu = ({ isOpen, anchorEl, onClose }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { handleLogout, handleDeleteUser } = useUsers();
  
  const navigation = (loction, logout) => {
    onClose();
    if (logout) return handleLogout();
    navigate(loction);
  };

    const onDelete = () => {
      handleDeleteUser(user._id);
      navigate(ROUTES.ROOT);
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
                navigation(ROUTES.LOGIN);
              }}
            >
              Login
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigation(ROUTES.SIGNUP);
              }}
            >
              Signup
            </MenuItem>
          </>
        )}
        {user && (
          <>
            <MenuItem
              onClick={() => {
                navigation(`${ROUTES.EDIT_USER}/${user._id}`);
              }}
            >
              Edit account
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigation(`${ROUTES.USER_PROFILE}/${user._id}`);
              }}
            >
              User profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                onDelete();
              }}
            >
              Delete user
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigation(ROUTES.ROOT, true);
              }}
            >
              Logout
            </MenuItem>
          </>
        )}
      </Box>
    </Menu>
  );
};

export default TopUserMenu;
