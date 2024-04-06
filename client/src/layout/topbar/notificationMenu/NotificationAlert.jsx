import React from "react";
import { Badge, IconButton, Tooltip } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import { useNotification } from "../../../providers/NotificationProvider";

const NotificationAlert = () => {
  const { setIsOpen, counter, setCounter } = useNotification();

  const openNotificationMenu = () => {
    setIsOpen(true);
    setCounter(0);
  };

  return (
    <Tooltip title="Open notifications alerts">
      <IconButton sx={{ display: "inline-flex" }} onClick={() => openNotificationMenu()}>
        <Badge badgeContent={counter} color="error">
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default NotificationAlert;
