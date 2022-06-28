import {
  Autocomplete,
  CircularProgress,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { useEffect } from "react";
import useContexts from "../../../shared/hooks/useContexts";
import useTopDestinations from "../../../shared/hooks/api/useTopDestinations";
import DestinationItem from "./DestinationItem";
import useListContinents from "../../../shared/hooks/api/useListContinents";
import { useAuth } from "@clerk/clerk-react";

export default function TopDestinationsSection() {
  const contexts = useContexts();
  const { setMessage } = contexts.alert;
  const { continents, loadingContinents } = useListContinents();
  const clerkAuth = useAuth();
  const {
    listTopDestinations,
    topDestinations,
    loadingTopDestinations,
    listingTopDestinationsError,
  } = useTopDestinations();

  useEffect(() => {
    if (listingTopDestinationsError) {
      setMessage({ type: "error", text: listingTopDestinationsError.data });
      if (listingTopDestinationsError.status === 401) clerkAuth.signOut();
    }
    //eslint-disable-next-line
  }, [listingTopDestinationsError]);

  if (
    (loadingTopDestinations && !topDestinations) ||
    !topDestinations ||
    (loadingContinents && !continents) ||
    !continents
  ) {
    return (
      <Box
        sx={{
          ...styles.topDestinations,
          ...styles.center,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={styles.topDestinations}>
      <Box sx={styles.title}>
        <Typography variant="h5" fontWeight="bold" display="flex" gap="15px">
          Top destinations
          <LeaderboardIcon sx={{ color: "#2ED29B" }} />
        </Typography>
        <Autocomplete
          sx={{ width: "20%" }}
          options={continents}
          renderInput={(params) => <TextField {...params} label="Continent" />}
          onChange={(event: any, newValue: string | null) => {
            listTopDestinations(newValue);
          }}
        />
      </Box>
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
    justifyContent: "space-between",
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
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
