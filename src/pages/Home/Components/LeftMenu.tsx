import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../shared/components/Logo";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LogoutIcon from "@mui/icons-material/Logout";
import useContexts from "../../../shared/hooks/useContexts";
import { useNavigate } from "react-router";

export default function LeftMenu() {
  const navigate = useNavigate();
  const contexts = useContexts();
  const { logout } = contexts.user;
  const { section, setSection } = contexts.section;

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "40px 40px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Logo size="small" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          marginTop: "-60vh",
        }}
      >
        <Button
          startIcon={<HomeIcon />}
          sx={{
            textTransform: "none",
            height: "50px",
            fontSize: "17px",
            fontWeight: "bold",
          }}
          color={section === "dashboard" ? "primary" : "secondary"}
          variant="contained"
          onClick={() => setSection("dashboard")}
        >
          Dashboard
        </Button>
        <Button
          startIcon={<TravelExploreIcon />}
          sx={{
            textTransform: "none",
            height: "50px",
            fontSize: "17px",
            fontWeight: "bold",
          }}
          color={section === "destinies" ? "primary" : "secondary"}
          variant="contained"
          onClick={() => setSection("destinies")}
        >
          Destinies
        </Button>
      </Box>
      <Button
        color="secondary"
        startIcon={<LogoutIcon />}
        onClick={logout}
        sx={{
          textTransform: "none",
          height: "50px",
          fontSize: "17px",
          fontWeight: "bold",
        }}
        variant="contained"
        fullWidth
      >
        Log Out
      </Button>
    </Box>
  );
}
