import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { useEffect } from "react";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";
import useTopDestinations from "../../../shared/hooks/api/useTopDestinations";
import DestinationItem from "./DestinationItem";

export default function TopDestinationsSection() {
  const contexts = useContexts();
  const { logout } = contexts.user;
  const {
    topDestinations,
    loadingTopDestinations,
    listingTopDestinationsError,
  } = useTopDestinations();

  useEffect(() => {
    if (listingTopDestinationsError) {
      fireAlert(listingTopDestinationsError.data);
      if (listingTopDestinationsError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [listingTopDestinationsError]);

  if ((loadingTopDestinations && !topDestinations) || !topDestinations) {
    return <div>loading...</div>;
  }

  return (
    <Box sx={styles.topDestinations}>
      <Typography variant="h5" fontWeight="bold" sx={styles.title}>
        Top destinations
        <LeaderboardIcon sx={{ color: "#2ED29B" }} />
      </Typography>
      <List sx={styles.list}>
        {topDestinations.map((destination: any, i: number) => (
          <DestinationItem key={i} size="small" destination={destination} />
        ))}
      </List>
    </Box>
  );
}

const styles = {
  topDestinations: {
    backgroundColor: "#fff",
    padding: "15px",
    paddingTop: "0px",
    borderRadius: "25px",
    marginTop: "30px",
    overflowY: "scroll",
    height: "40%",
  },
  title: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    position: "sticky",
    top: "0px",
    zIndex: "1",
    background: "#fff",
    padding: "20px 0",
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
};
