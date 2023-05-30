import { Box, IconButton, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import ROUTES from "../../router/routesModel";
import { ColorModeContext, tokens } from "../../theme";
import { useUser } from "../../users/providers/UserProviders";
import { setColorModeInLocalStorage } from "../../utils/colorModeInLocalStorage";

const Topbar = () => {
  const user = useUser();
  // console.log(user);
  // const user = null
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  setColorModeInLocalStorage(theme.palette.mode);
   
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
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
        {!user ? (
          // <IconButton onClick={() => navigate(ROUTES.LOGIN)}>
          <IconButton onClick={() => navigate(ROUTES.SIGNUP)}>
            <LockOpenOutlinedIcon />
          </IconButton>
        ) : (
          // <IconButton onClick={() => navigate(ROUTES.LOGIN)}>
          <IconButton onClick={() => navigate(ROUTES.SIGNUP)}>
            <PersonOutlinedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
