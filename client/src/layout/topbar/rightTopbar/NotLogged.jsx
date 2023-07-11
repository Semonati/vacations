import React from "react";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { IconButton, Tooltip } from "@mui/material";

import { useMenu } from "../../../providers/MenuProvider";

const NotLogged = () => {
  const setOpen = useMenu();
  return (
    <Tooltip title="Open registration settings">
      <IconButton
        sx={{ display: "inline-flex" }}
        onClick={() => setOpen(true)}
      >
        <LockOpenOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};

export default NotLogged;
