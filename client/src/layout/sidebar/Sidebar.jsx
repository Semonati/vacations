import { useState } from "react";
import { ProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { tokens } from "../../theme";
import NavItem from "../../router/components/NavItem";
import ROUTES from "../../router/routesModel";
import { useUser } from "../../providers/UserProviders";
import {
  removeMenu,
  setHiddenMenuInLocalStorage,
} from "../../users/services/localStorageService";

const Sidebar = () => {
  const { user } = useUser();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");

  const openMenu = (value) => {
    setIsCollapsed(value);
    if (value === false) {
      return setHiddenMenuInLocalStorage(value);
    }
    if (value) {
      return removeMenu();
    }
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar": {
          minWidth: "15vw",
          width: "15vw",
        },
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          padding: "0.5% 0.5% 0 1% !important",
          position: "fixed",
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Box mb="5%">
          <Box
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            m="4% 0 0 0"
          >
            {!isCollapsed && (
              <Typography variant="h4" color={colors.gray[100]}>
                VACTIONS
              </Typography>
            )}

            <IconButton onClick={() => openMenu(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <NavItem
              to={ROUTES.ROOT}
              label="Home"
              icon={<HomeOutlinedIcon />}
              isCollapsed={isCollapsed}
              setSelected={setSelected}
              selected={selected}
            />
            {user && (
              <Box display="flex" flexDirection="column">
                <NavItem
                  to={ROUTES.My_VACATIONS}
                  label="My Vacations"
                  icon={<FlightOutlinedIcon />}
                  isCollapsed={isCollapsed}
                  setSelected={setSelected}
                  selected={selected}
                />
                <NavItem
                  to={`${ROUTES.FAV_VACATION}/${user._id}`}
                  label="Fav Vacations"
                  icon={<FavoriteBorderOutlinedIcon />}
                  isCollapsed={isCollapsed}
                  setSelected={setSelected}
                  selected={selected}
                />
              </Box>
            )}
          </Box>

          <Box display="flex" flexDirection="column">
            <NavItem
              to={ROUTES.ABOUT}
              label="About Us"
              icon={<InfoOutlinedIcon />}
              isCollapsed={isCollapsed}
              setSelected={setSelected}
              selected={selected}
            />
            <NavItem
              to={ROUTES.CONTACT_US}
              label="Contact Us"
              icon={<EmailOutlinedIcon />}
              isCollapsed={isCollapsed}
              setSelected={setSelected}
              selected={selected}
            />
          </Box>
        </Box>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
