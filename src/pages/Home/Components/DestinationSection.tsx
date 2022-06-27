import { Box } from "@mui/system";
import { useEffect } from "react";
import useGetDestination from "../../../shared/hooks/api/useGetDestination";
import useContexts from "../../../shared/hooks/useContexts";
import DestinationBanner from "./DestinationBanner";
import DestinationFooter from "./DestinationFooter";
import DestinationDescriptions from "./DestinationDescriptions";
import { CircularProgress } from "@mui/material";
import DestinationsMap from "./DestinationMap";
import { useAuth } from "@clerk/clerk-react";

export default function DestinationSection() {
  const {
    destination,
    loadingDestination,
    getDestinationError,
    getDestination,
  } = useGetDestination();
  const contexts = useContexts();
  const { setMessage } = contexts.alert;
  const clerkAuth = useAuth();

  useEffect(() => {
    if (getDestinationError) {
      setMessage(getDestinationError.data);
      if (getDestinationError.status === 401) clerkAuth.signOut();
    }
    //eslint-disable-next-line
  }, [getDestinationError]);

  if ((loadingDestination && !destination) || !destination) {
    return (
      <Box sx={{ ...styles.destination, ...styles.center }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={styles.destination}>
      <DestinationBanner destination={destination} />
      <DestinationDescriptions descriptions={destination.descriptions} />
      <DestinationsMap localization={destination.localization[0]} />
      <DestinationFooter destination={destination} onUpdate={getDestination} />
    </Box>
  );
}

const styles = {
  destination: {
    width: "60%",
    background: "#F1FBF4",
    margin: "20px 0",
    padding: "30px 30px 30px",
    borderRadius: "50px",
    overflowY: "scroll",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
