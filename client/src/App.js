import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./layout/sidebar/Sidebar";
import Router from "./router/Router";
import { UserProvider } from "./users/providers/UserProviders";
import Layout from "./layout/Layout";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <Layout>
              <Router />
            </Layout>
          </div>
        </UserProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
