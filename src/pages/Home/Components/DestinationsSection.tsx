import { InputAdornment, List, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import useListDestinations from "../../../shared/hooks/api/useListDestinations";
import useContexts from "../../../shared/hooks/useContexts";
import DestinationItem from "./DestinationItem";
import SearchIcon from "@mui/icons-material/Search";
import useHeaders from "../../../shared/hooks/useHeaders";

export default function DestinationsSection() {
  const {
    listDestinations,
    destinations,
    loadingDestinations,
    listingDestinationsError,
  } = useListDestinations();
  const contexts = useContexts();
  const { logout } = contexts.user;
  const { setMessage } = contexts.alert;
  const [search, setSearch] = useState("");
  const headers = useHeaders();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    listDestinations(event.target.value, headers);
  }

  useEffect(() => {
    listDestinations(null, headers);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (listingDestinationsError) {
      setMessage({ type: "error", text: listingDestinationsError.data });
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
      <Box sx={styles.title}>
        <Typography fontWeight="bold" variant="h3">
          Destinations
        </Typography>
        <TextField
          variant="standard"
          label="Name"
          value={search}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
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
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    padding: "20px 0",
    position: "sticky",
    top: "0px",
    zIndex: "1",
    background: "#F1FBF4",
  },
};
