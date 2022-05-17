import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
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

  console.log(topDestinies);

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
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "25px",
        marginTop: "30px",
        overflowY: "scroll",
        height: "40%",
        position: "relative",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          position: "sticky",
          top: "0px",
          zIndex: "1",
          background: "#fff",
          paddingBottom: "20px",
        }}
      >
        Top destinations
        <LeaderboardIcon />
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {topDestinies.map((destiny: any, i: number) => (
          <DestinyItem key={i} size="small" destiny={destiny} />
        ))}
      </List>
    </Box>
  );
}
