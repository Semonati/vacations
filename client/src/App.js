import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./layout/sidebar/Sidebar";
import Router from "./router/Router";
import { UserProvider } from "./providers/UserProviders";
import Layout from "./layout/Layout";
import { SnackBarProvider } from "./providers/SnackBarProvifer";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SnackBarProvider>
          <UserProvider>
            <CssBaseline />
            <div className="app">
              <Sidebar />
              <Layout>
                <Router />
              </Layout>
            </div>
          </UserProvider>
        </SnackBarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
