import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { node } from "prop-types";
import { io } from "socket.io-client";

import TopNotificationMenu from "../layout/topbar/notificationMenu/TopNotificationMenu";
import { useUser } from "./UserProviders";

const NotificationContext = React.createContext(null);

export const NotificationProvider = ({ children }) => {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));
  const [isOpen, setIsOpen] = useState();
  const [notifications, setNotifications] = useState([]);
  const [counter, setCounter] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef();
  const { socket } = Socketio();

  useEffect(() => {
    if (socket) {
      socket.on("getNotification", (data) => {
        setNotifications((prev) => [...prev, data]);
        setCounter((prev) => prev + 1);
      });
    }
  }, [socket]);

  useEffect(() => {
    setAnchorEl(anchorRef.current);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [screenSize]);

  const value = useMemo(() => {
    return { setIsOpen, socket, notifications, counter, setCounter };
  }, [setIsOpen, socket, notifications, counter, setCounter]);

  return (
    <>
      <NotificationContext.Provider value={value}>
        {children}
      </NotificationContext.Provider>
      <Box
        ref={anchorRef}
        position="fixed"
        top="10%"
        right="6%"
        width="100%"
      ></Box>
      {anchorEl && (
        <TopNotificationMenu
          anchorEl={anchorEl}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          notifications={notifications}
          counter={counter}
          setCounter={() => setCounter(0)}
        />
      )}
    </>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error("useNotification must be used within a NameProvider");
  return context;
};

const Socketio = () => {
  const { user } = useUser();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user) setSocket(io("http://localhost:8181"));
  }, [user]);

  useEffect(() => {
    if (user && socket) {
      socket.emit("newUser", user._id);
    }
  }, [socket, user]);

  return { socket };
};

NotificationProvider.propTypes = {
  children: node.isRequired,
};
