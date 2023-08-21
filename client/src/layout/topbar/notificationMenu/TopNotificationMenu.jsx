import React from "react";
import { Box, ListItem, ListItemText, Menu } from "@mui/material";

import { useUser } from "../../../providers/UserProviders";

const TopNotificationMenu = ({
  isOpen,
  anchorEl,
  onClose,
  notifications,
}) => {
  const { user } = useUser();

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
        {user &&
          notifications.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${item.fullName} ${
                  item.status ? "liked" : "unliked"
                } your vacation story`}
              />
            </ListItem>
          ))}
      </Box>
    </Menu>
  );
};

export default TopNotificationMenu;
