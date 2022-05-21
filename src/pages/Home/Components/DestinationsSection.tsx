import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import useListDestinations from "../../../shared/hooks/api/useListDestinations";
import useContexts from "../../../shared/hooks/useContexts";
import { fireAlert } from "../../../shared/utils/alerts";
import DestinationItem from "./DestinationItem";

export default function DestinationsSection() {
  const { destinations, loadingDestinations, listingDestinationsError } =
    useListDestinations();
  const contexts = useContexts();
  const { logout } = contexts.user;

  useEffect(() => {
    if (listingDestinationsError) {
      fireAlert(listingDestinationsError.data);
      if (listingDestinationsError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [listingDestinationsError]);

  if ((loadingDestinations && !destinations) || !destinations) {
    return (
      <Box sx={styles.destinations}>
        <Typography variant="h3" sx={styles.title}>
          Destination
        </Typography>
        Loading...
      </Box>
    );
  }

  return (
    <Box sx={styles.destinations}>
      <Typography variant="h3" sx={styles.title}>
        Destinations
      </Typography>
      <List>
        {destinations.map((destination: any, i: number) => (
          <DestinationItem key={i} size="big" destination={destination} />
        ))}
      </List>
    </Box>
  );
}

const styles = {
  destinations: {
    width: "60%",
    background: "#F1FBF4",
    margin: "20px 0",
    padding: "0px 30px 30px",
    borderRadius: "50px",
    overflowY: "scroll",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "15px",
    padding: "20px 0",
    position: "sticky",
    top: "0px",
    zIndex: "1",
    background: "#F1FBF4",
  },
};
