import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useContexts from "../../../shared/hooks/useContexts";

export default function DashboardSection() {
  const contexts = useContexts();
  const { user } = contexts.user;

  return (
    <Box
      sx={{
        flex: 3,
        background: "#F5FAF8",
        margin: "20px 0",
        padding: "30px",
        borderRadius: "50px",
      }}
    >
      <Typography>{`Hello ${user.username}`}</Typography>
    </Box>
  );
}
