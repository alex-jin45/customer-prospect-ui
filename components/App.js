import "./styles.css";
import BasicTable from "./Table";
import { ColorModeContext, useMode } from "../src/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import TopDisplay from "../src/TopDisplay";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <TopDisplay />
            <BasicTable></BasicTable>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
