import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { useEffect } from "react";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";
import useTopDestinies from "../../../shared/hooks/api/useTopDestinies";
import DestinyItem from "./DestinyItem";

export default function TopDestinationsSection() {
  const contexts = useContexts();
  const { logout } = contexts.user;
  const { topDestinies, loadingTopDestinies, listingTopDestiniesError } =
    useTopDestinies();

  useEffect(() => {
    if (listingTopDestiniesError) {
      fireAlert(listingTopDestiniesError.data);
      if (listingTopDestiniesError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [listingTopDestiniesError]);

  if ((loadingTopDestinies && !topDestinies) || !topDestinies) {
    return <div>loading...</div>;
  }

  return (
    <Box sx={styles.topDestinations}>
      <Typography variant="h5" fontWeight="bold" sx={styles.title}>
        Top destinations
        <LeaderboardIcon sx={{ color: "#2ED29B" }} />
      </Typography>
      <List sx={styles.list}>
        {topDestinies.map((destiny: any, i: number) => (
          <DestinyItem key={i} size="small" destiny={destiny} />
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
