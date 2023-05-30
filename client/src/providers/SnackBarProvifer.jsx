import React, { useState, useContext } from "react";
import { node } from "prop-types";
import { Alert, Snackbar } from "@mui/material";

const SnackBarContext = React.createContext(null);

export const SnackBarProvider = ({ children }) => {
  const [isSnackOpen, setOpenSnack] = useState(false);
  const [snackColor, setSnackColor] = useState("success");
  const [snackVariant, setSnackVariant] = useState("filled");
  const [snackMessage, setSnackMessage] = useState("in snackbar!");

  const setSnack = (color, message, variant = "filled") => {
    setOpenSnack(true);
    setSnackColor(color);
    setSnackMessage(message);
    setSnackVariant(variant);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSnackOpen}
        onClose={() => {
          setOpenSnack((prev) => !prev);
        }}
        autoHideDuration={5000}
      >
        <Alert severity={snackColor} variant={snackVariant}>
          {snackMessage}
        </Alert>
      </Snackbar>
      <SnackBarContext.Provider value={setSnack}>
        {children}
      </SnackBarContext.Provider>
    </>
  );
};

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);
  if (!context)  throw new Error("useSnackBar must be used within a NameProvider");
  return context;
};

SnackBarProvider.propTypes = {
  children: node.isRequired,
};
