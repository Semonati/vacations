import { useEffect } from "react";
import { node } from "prop-types";

import useUsers from "../hooks/useUsers";

const events = [
  "load",
  "mousemove",
  "mousedown",
  "click",
  "scroll",
  "keypress",
];

const AutoLogout = ({ children }) => {
  const { handleLogout } = useUsers();
  let timer;

  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      resetTimer();
      Object.values(events).forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });
      logoutAction();
    }, 14400000);
  };

  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);

  const logoutAction = () => {
    handleLogout();
  };

  return children;
};

AutoLogout.propTypes = {
  children: node.isRequired,
};

export default AutoLogout;
