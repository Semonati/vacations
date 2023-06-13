import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { ColorModeContext } from "../../../theme";
import { useUser } from "../../../providers/UserProviders";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { setColorModeInLocalStorage } from "../../../utils/colorModeInLocalStorage";

const RightTopbar = () => {
  const { user } = useUser();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
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
      <IconButton>
        <NotificationsOutlinedIcon />
      </IconButton>
      <IconButton>
        <SettingsOutlinedIcon />
      </IconButton>
        {!user && <NotLogged />}
        {user && <Logged />}
    </Box>
  );
};

export default RightTopbar;
