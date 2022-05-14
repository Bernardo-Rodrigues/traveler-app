import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useDestinies from "../../../shared/hooks/api/useDestinies";
import useContexts from "../../../shared/hooks/useContexts";
import DestinyItem from "./DestinyItem";

export default function DestiniesSection() {
  const contexts = useContexts();
  const { destinies, loadingDestinies } = useDestinies();

  if ((loadingDestinies && !destinies) || !destinies) {
    return (
      <Box
        sx={{
          flex: 3,
          background: "#E5FAF8",
          margin: "20px 0",
          padding: "0px 30px 30px",
          borderRadius: "50px",
        }}
      >
        Loading...
      </Box>
    );
  }

  console.log(destinies);

  return (
    <Box
      sx={{
        flex: 3,
        background: "#E5FAF8",
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
