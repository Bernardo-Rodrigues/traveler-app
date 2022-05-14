import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Alert from "./shared/components/Alert";
import GlobalProvider from "./shared/contexts/GlobalContext";
import { GlobalStyle } from "./shared/styles/globalStyle";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./shared/styles/themes";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <AppRoutes />
          <Alert />
        </GlobalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
