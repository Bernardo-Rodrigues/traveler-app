import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useContexts from "../../../shared/hooks/useContexts";
import FavoritesSection from "./FavoritesSection";
import Tips from "./Tips";
import TopDestinationsSection from "./TopDestinationsSection";

export default function DashboardSection() {
  const contexts = useContexts();
  const { user } = contexts.user;
  const { currentTrip } = contexts.currentTrip;

  return (
    <Box sx={styles.dashboard}>
      <Typography
        variant="h4"
        fontWeight="bold"
      >{`Hello, ${user.username}! 👋`}</Typography>
      <Typography sx={{ color: "#999", marginTop: "10px" }}>
        Welcome back and explore the world.
      </Typography>
      <FavoritesSection />
      {currentTrip ? <Tips /> : <TopDestinationsSection />}
    </Box>
  );
}

const styles = {
  dashboard: {
    background: "#F1FBF4",
    margin: "20px 0",
    padding: "30px",
    borderRadius: "50px",
    width: "60%",
  },
};
