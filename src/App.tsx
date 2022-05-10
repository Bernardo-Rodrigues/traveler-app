import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/globalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}
