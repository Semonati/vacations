import React from "react";
import { Badge, IconButton, Tooltip } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import { useNotification } from "../../../providers/NotificationProvider";

const NotificationAlert = () => {
  const { notifications } = useNotification();
  const value = useNotification();
  const { setIsOpen } = value;

  return (
    <Tooltip title="Open notifications alerts">
      <IconButton
        sx={{ display: "inline-flex" }}
        onClick={() => setIsOpen(notifications.length ? true : false)}
      >
        <Badge
          badgeContent={notifications.length === 0 ? 0 : notifications.length}
          color="error"
        >
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default NotificationAlert;
