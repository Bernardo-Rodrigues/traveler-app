import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useContexts from "../../../shared/hooks/useContexts";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditPerfilModal from "./EditPerfilModal";

export default function PerfilInfo() {
  const contexts = useContexts();
  const { user } = contexts.user;
  const [edit, setEdit] = useState(false);

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
      {edit && <EditPerfilModal edit={edit} setEdit={setEdit} />}
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
          {user?.title}
        </Typography>
      </Box>
      <Tooltip sx={{ marginLeft: "25%" }} title="Edit">
        <IconButton onClick={() => setEdit(true)}>
          <EditIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
