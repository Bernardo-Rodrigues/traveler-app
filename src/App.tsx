import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Alert from "./shared/components/Alert";
import GlobalProvider from "./shared/contexts/GlobalContext";
import { GlobalStyle } from "./shared/styles/globalStyle";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./shared/styles/themes";
import { LoadScript } from "@react-google-maps/api";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY as string}
          >
            <AppRoutes />
            <Alert />
          </LoadScript>
        </GlobalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
