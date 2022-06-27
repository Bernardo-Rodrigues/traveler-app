import { useUser } from "@clerk/clerk-react";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useCurrentTriṕ from "../../../shared/hooks/api/useCurrentTrip";
import FavoritesSection from "./FavoritesSection";
import Tips from "./Tips";
import TopDestinationsSection from "./TopDestinationsSection";

export default function DashboardSection() {
  const { user } = useUser();
  const { currentTrip, loadingCurrentTrip } = useCurrentTriṕ();

  return (
    <Box sx={styles.dashboard}>
      <Typography
        variant="h4"
        fontWeight="bold"
      >{`Hello, ${user?.username}! 👋`}</Typography>
      <Typography sx={{ color: "#999", marginTop: "10px" }}>
        Welcome back and explore the world.
      </Typography>
      <FavoritesSection />
      {currentTrip ? (
        <Tips currentTrip={currentTrip} />
      ) : loadingCurrentTrip ? (
        <Loading />
      ) : (
        <TopDestinationsSection />
      )}
    </Box>
  );
}

function Loading() {
  return (
    <Box
      sx={{
        ...styles.currentTrip,
        ...styles.center,
      }}
    >
      <CircularProgress />
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
  currentTrip: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "25px",
    marginTop: "30px",
    height: "40%",
    width: "100%",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
