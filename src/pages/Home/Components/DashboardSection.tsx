import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useContexts from "../../../shared/hooks/useContexts";
import FavoritesSection from "./FavoritesSection";

export default function DashboardSection() {
  const contexts = useContexts();
  const { user } = contexts.user;

  return (
    <Box
      sx={{
        flex: 3,
        background: "#F1FBF4",
        margin: "20px 0",
        padding: "30px",
        borderRadius: "50px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
      >{`Hello, ${user.username}! 👋`}</Typography>
      <Typography sx={{ color: "#999", marginTop: "10px" }}>
        Welcome back and explore the world.
      </Typography>
      <FavoritesSection />
    </Box>
  );
}