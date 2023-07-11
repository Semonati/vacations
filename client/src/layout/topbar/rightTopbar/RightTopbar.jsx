import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { ColorModeContext } from "../../../theme";
import { useUser } from "../../../providers/UserProviders";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { setColorModeInLocalStorage } from "../../../utils/colorModeInLocalStorage";
import NotificationAlert from "../notificationMenu/NotificationAlert";
import { useNotification } from "../../../providers/NotificationProvider";

const RightTopbar = () => {
  const { user } = useUser();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { socket } = useNotification();
  setColorModeInLocalStorage(theme.palette.mode);


  return (
    <Box display="flex">
      <IconButton onClick={colorMode.toggelColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
      {user && <NotificationAlert socket={socket} />}
      {!user && <NotLogged />}
      {user && <Logged />}
    </Box>
  );
};

export default RightTopbar;
