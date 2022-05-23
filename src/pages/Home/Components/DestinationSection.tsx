import { Box } from "@mui/system";
import { useEffect } from "react";
import useGetDestination from "../../../shared/hooks/api/useGetDestination";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";
import DestinationBanner from "./DestinationBanner";
import DestinationFooter from "./DestinationFooter";
import DestinationDescriptions from "./DestinationDescriptions";
import { CircularProgress } from "@mui/material";

export default function DestinationSection() {
  const {
    destination,
    loadingDestination,
    getDestinationError,
    updateDestination,
  } = useGetDestination();
  const contexts = useContexts();
  const { logout } = contexts.user;

  useEffect(() => {
    if (getDestinationError) {
      fireAlert(getDestinationError.data);
      if (getDestinationError.status === 401) logout();
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
      <DestinationFooter
        destination={destination}
        onUpdate={() => updateDestination(destination.name)}
      />
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
