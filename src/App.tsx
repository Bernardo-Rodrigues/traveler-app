import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Alert from "./shared/components/Alert";
import GlobalProvider from "./shared/contexts/GlobalContext";
import { GlobalStyle } from "./shared/styles/globalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalProvider>
        <AppRoutes />
        <Alert />
      </GlobalProvider>
    </BrowserRouter>
  );
}
