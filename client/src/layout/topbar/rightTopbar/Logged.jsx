import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useMenu } from "../../../providers/MenuProvider";

const Logged = () => {
  const setOpen = useMenu();
  return (
    <Tooltip title="Open user settings">
      <IconButton
        sx={{ display: "inline-flex" }}
        onClick={() => setOpen(true)}
      >
        <PersonOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;
