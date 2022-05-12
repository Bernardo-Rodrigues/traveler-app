import { Typography, Box } from "@mui/material";
import logo from "../images/logo.png";

export default function Logo() {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography sx={{ fontSize: "50px" }}>Traveler</Typography>
      <Box sx={{ position: "absolute", top: "0px", left: "180px" }}>
        <img src={logo} alt="logo" />
      </Box>
    </Box>
  );
}
