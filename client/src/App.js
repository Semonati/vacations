import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./layout/sidebar/Sidebar";
import Router from "./router/Router";
import { UserProvider } from "./providers/UserProviders";
import Layout from "./layout/Layout";
import { SnackBarProvider } from "./providers/SnackBarProvifer";
import AutoLogout from "./users/pages/AutoLogout ";
import { NotificationProvider } from "./providers/NotificationProvider";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SnackBarProvider>
          <UserProvider>
            <NotificationProvider>
              <CssBaseline />
              <AutoLogout>
                <div className="app">
                  <Sidebar />
                    <Layout>
                      <Router />
                    </Layout>
                </div>
              </AutoLogout>
            </NotificationProvider>
          </UserProvider>
        </SnackBarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
