import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
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

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");
  const user = {
    name: "Nati Semo",
  };

  return (
    <Box
      position="sticky"
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square" breakpoint="md">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "0 0 5% 0",
              color: colors.gray[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                m="0 0 10% 8%"
              >
                <Typography variant="h3" color={colors.gray[100]}>
                  VACTIONS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
            {!isCollapsed && (
              <Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.gray[100]}
                    fontWeight="bold"
                  >
                    {user.name}
                  </Typography>
                </Box>
              </Box>
            )}
          </MenuItem>

          {/* CATEGORIES */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <NavItem
              to={ROUTES.ROOT}
              label="Home"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <NavItem
              to={ROUTES.My_VACTIONS}
              label="My Vacations"
              icon={<FlightOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <NavItem
              to={ROUTES.FAV_VACTION}
              label="Favorites Vacations"
              icon={<FavoriteBorderOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Divider />

            <Box>
              {!isCollapsed ? (
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{
                    m: "5% 0 2% 10%",
                    display: "flex",
                  }}
                >
                  CONTACS
                </Typography>
              ) : (
                <Typography
                  variant="h6"
                  color={colors.gray[300]}
                  sx={{
                    m: "5% 0 2% 10%",
                    display: "flex",
                    justifyContent: "center",
                    width: "75%",
                  }}
                ></Typography>
              )}
            </Box>
            <NavItem
              to={ROUTES.ABOUT}
              label="About Us"
              icon={<InfoOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <NavItem
              to={ROUTES.CONTACTS}
              label="Contact Us"
              icon={<EmailOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
