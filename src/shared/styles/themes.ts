import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";

const LeftMenuButton = styled(Button)({
  textTransform: "none",
  height: "50px",
  fontSize: "17px",
  fontWeight: "bold",
}) as typeof Button;

const SmallAvatar = styled(Avatar)({
  width: "75px",
  height: "75px",
}) as typeof Avatar;

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

export { theme, LeftMenuButton, SmallAvatar };
