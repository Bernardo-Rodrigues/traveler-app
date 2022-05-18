import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import useDestinies from "../../../shared/hooks/api/useDestinies";
import useContexts from "../../../shared/hooks/useContexts";
import { fireAlert } from "../../../shared/utils/alerts";
import DestinyItem from "./DestinyItem";

export default function DestiniesSection() {
  const { destinies, loadingDestinies, listingDestiniesError } = useDestinies();
  const contexts = useContexts();
  const { logout } = contexts.user;

  useEffect(() => {
    if (listingDestiniesError) {
      fireAlert(listingDestiniesError.data);
      if (listingDestiniesError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [listingDestiniesError]);

  if ((loadingDestinies && !destinies) || !destinies) {
    return (
      <Box sx={styles.destinies}>
        <Typography variant="h3" sx={styles.title}>
          Destinies
        </Typography>
        Loading...
      </Box>
    );
  }

  return (
    <Box sx={styles.destinies}>
      <Typography variant="h3" sx={styles.title}>
        Destinies
      </Typography>
      <List>
        {destinies.map((destiny: any, i: number) => (
          <DestinyItem key={i} size="big" destiny={destiny} />
        ))}
      </List>
    </Box>
  );
}

const styles = {
  destinies: {
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
