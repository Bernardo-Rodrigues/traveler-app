import { Typography, Box } from "@mui/material";
import logo from "../images/logo.png";

interface Props {
  size: string;
}

export default function Logo({ size }: Props) {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography
        variant={size === "big" ? "h2" : "h3"}
        sx={{ fontWeight: "bold" }}
      >
        Traveler
      </Typography>
      <Box sx={{ position: "absolute", top: "-15%", left: "100%" }}>
        <img src={logo} alt="logo" />
      </Box>
    </Box>
  );
}
