import { BrowserRouter, useNavigate } from "react-router-dom";
import AppRoutes from "./routes";
import Alert from "./shared/components/Alert";
import GlobalProvider from "./shared/contexts/GlobalContext";
import { GlobalStyle } from "./shared/styles/globalStyle";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./shared/styles/themes";
import { LoadScript } from "@react-google-maps/api";
import { ClerkProvider } from "@clerk/clerk-react";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

export default function App() {
  const navigate = useNavigate();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <ClerkProvider
            frontendApi={frontendApi}
            navigate={(to) => navigate(to)}
          >
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY as string}
            >
              <AppRoutes />
              <Alert />
            </LoadScript>
          </ClerkProvider>
        </GlobalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
