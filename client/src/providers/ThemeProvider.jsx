import React, { useState, useContext, useCallback, useMemo } from "react";
import { node } from "prop-types";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(false);

  const toggelDarkMode = useCallback(
    () => setDark((prev) => !prev),
    [setDark]
  );

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const value = useMemo(() => {
    return { isDark, toggelDarkMode };
  }, [isDark, toggelDarkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

ThemeProvider.propTypes = {
  children: node.isRequired,
};
