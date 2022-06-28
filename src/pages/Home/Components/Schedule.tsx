import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useContexts from "../../../shared/hooks/useContexts";
import { useEffect } from "react";
import useListUpcomingTrips from "../../../shared/hooks/api/useListUpcomingTrips";
import Trip from "./Trip";
import { useAuth } from "@clerk/clerk-react";

export default function Schedule() {
  const contexts = useContexts();
  const { setMessage } = contexts.alert;
  const { update, setUpdate } = contexts.schedule;
  const clerkAuth = useAuth();
  const { trips, listingTripsError, loadingTrips, listTrips } =
    useListUpcomingTrips();

  useEffect(() => {
    if (update === true) {
      listTrips();
      setUpdate(false);
    }
    //eslint-disable-next-line
  }, [update]);

  useEffect(() => {
    if (listingTripsError) {
      setMessage(listingTripsError.data);
      if (listingTripsError.status === 401) clerkAuth.signOut();
    }
    //eslint-disable-next-line
  }, [listingTripsError]);

  if ((loadingTrips && !trips) || !trips) {
    return <div>loading...</div>;
  }

  return (
    <Box sx={styles.schedule}>
      <Typography variant="h5" sx={styles.title}>
        My Schedule
      </Typography>
      <List sx={styles.list}>
        {trips.map((trip: any, i: number) => (
          <Trip trip={trip} key={i} />
        ))}
      </List>
    </Box>
  );
}

const styles = {
  schedule: {
    marginTop: "-20px",
    overflowY: "scroll",
    height: "50%",
    border: "2px solid #ccc",
    borderRadius: "10px",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    position: "sticky",
    top: "0px",
    zIndex: "1",
    background: "#fff",
    padding: "10px 0",
    borderBottom: "1px solid #ccc",
  },
  list: {
    padding: "20px 10px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
};
