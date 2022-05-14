import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#2ED29B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#73848C",
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
