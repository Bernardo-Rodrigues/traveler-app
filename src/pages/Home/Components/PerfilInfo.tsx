import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useContexts from "../../../shared/hooks/useContexts";

export default function PerfilInfo() {
  const contexts = useContexts();
  const { user } = contexts.user;

  return (
    <Box
      sx={{
        display: "flex",
        gap: "5%",
        alignItems: "center",
        marginBottom: "40px",
      }}
    >
      <Avatar
        alt="Avatar"
        src={user?.imageLink}
        sx={{ width: "60px", height: "60px" }}
      />
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          {user?.username}
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "14px", color: "#73848C" }}
        >
          Traveler
        </Typography>
      </Box>
    </Box>
  );
}
