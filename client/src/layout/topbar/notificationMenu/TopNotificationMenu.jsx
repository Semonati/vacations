import React from "react";
import { Box, Menu, MenuItem } from "@mui/material";

import { useUser } from "../../../providers/UserProviders";
import NotificationList from "./NotificationList"

const TopNotificationMenu = ({ isOpen, anchorEl, onClose, notifications }) => {
  const { user } = useUser();

  const dispalyNotification = (item) => {
    if (item.status) return `${item.fullName} liked your vacation story `;
    return `${item.fullName} disliked your vacation story `;
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
        {user && (
          <>
            {/* <MenuItem>
              {notifications.map((item) => dispalyNotification(item))}
            </MenuItem> */}
            <NotificationList notifications={notifications}/>
          </>
        )}
      </Box>
    </Menu>
  );
};

export default TopNotificationMenu;
