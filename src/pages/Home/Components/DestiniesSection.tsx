import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import useDestinies from "../../../shared/hooks/api/useDestinies";
import useContexts from "../../../shared/hooks/useContexts";
import { fireAlert } from "../../../shared/utils/alerts";
import DestinyItem from "./DestinyItem";

export default function DestiniesSection() {
  const { destinies, loadingDestinies, listingDestiniesError } = useDestinies();
  const contexts = useContexts();
  const { logout } = contexts.user;
  const navigate = useNavigate();

  useEffect(() => {
    if (listingDestiniesError) {
      fireAlert(listingDestiniesError.data);
      if (listingDestiniesError.status === 401) logout();
    }
  }, [listingDestiniesError]);

  if ((loadingDestinies && !destinies) || !destinies) {
    return (
      <Box
        sx={{
          flex: 3,
          background: "#F1FBF4",
          margin: "20px 0",
          padding: "0px 30px 30px",
          borderRadius: "50px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: "15px",
            padding: "20px 0",
            position: "sticky",
            top: "0px",
            zIndex: "1",
            background: "#F1FBF4",
          }}
        >
          Destinies
        </Typography>
        Loading...
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flex: 3,
        background: "#F1FBF4",
        margin: "20px 0",
        padding: "0px 30px 30px",
        borderRadius: "50px",
        overflowY: "scroll",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "15px",
          padding: "20px 0",
          position: "sticky",
          top: "0px",
          zIndex: "1",
          background: "#E5FAF8",
        }}
      >
        Destinies
      </Typography>
      <List>
        {destinies.map((destiny: any, i: number) => (
          <DestinyItem key={i} destiny={destiny} />
        ))}
      </List>
    </Box>
  );
}
