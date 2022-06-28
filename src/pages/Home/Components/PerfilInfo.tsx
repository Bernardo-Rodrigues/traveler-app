import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";

export default function PerfilInfo() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Box
      sx={{
        display: "flex",
        gap: "5%",
        alignItems: "center",
        marginBottom: "40px",
        width: "100%",
      }}
    >
      <Avatar
        alt="Avatar"
        src={user?.profileImageUrl}
        sx={{ width: "60px", height: "60px" }}
      />
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          {user?.username}
        </Typography>
      </Box>
      <Tooltip sx={{ marginLeft: "25%" }} title="Edit">
        <IconButton onClick={() => navigate("/dashboard/user")}>
          <EditIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
